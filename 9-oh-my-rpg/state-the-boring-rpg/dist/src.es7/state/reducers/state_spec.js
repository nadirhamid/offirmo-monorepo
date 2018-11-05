import { expect } from 'chai';
import { xxx_internal_reset_prng_cache } from '@oh-my-rpg/state-prng';
import { ALL_ADVENTURE_ARCHETYPES } from '@oh-my-rpg/logic-adventures';
import { get_unequipped_item_count, get_equipped_item_count, } from '@oh-my-rpg/state-inventory';
import * as EnergyState from '@oh-my-rpg/state-energy';
import { Currency, get_currency_amount, } from '@oh-my-rpg/state-wallet';
import { SCHEMA_VERSION } from '../../consts';
import { create, play, } from '..';
describe('@oh-my-rpg/state-the-boring-rpg - reducer', function () {
    beforeEach(() => xxx_internal_reset_prng_cache());
    describe('🆕  initial state', function () {
        it('should be correct', function () {
            const state = create();
            expect(state.uuid).to.be.a('string');
            expect(state.creation_date).to.be.a('string');
            // check presence of sub-states
            expect(state, 'avatar').to.have.property('avatar');
            expect(state, 'inventory').to.have.property('inventory');
            expect(state, 'wallet').to.have.property('wallet');
            expect(state, 'prng').to.have.property('prng');
            expect(state, 'energy').to.have.property('energy');
            expect(state, 'engagement').to.have.property('engagement');
            expect(state, 'codes').to.have.property('codes');
            expect(state, 'codes').to.have.property('progress');
            expect(Object.keys(state), 'quick key count check').to.have.lengthOf(13); // because this test should be updated if that changes
            // init of custom values
            expect(state).to.have.property('schema_version', SCHEMA_VERSION);
            expect(state).to.have.property('revision', 0);
            expect(state.last_adventure).to.be.null;
            // check our 2 predefined items are present and equipped
            expect(get_equipped_item_count(state.inventory), 'equipped').to.equal(2);
            expect(get_unequipped_item_count(state.inventory), 'unequipped').to.equal(0);
        });
    });
    describe('👆🏾 user actions', function () {
        describe('🤘🏽 play', function () {
            context('🚫  when NOT allowed (the cooldown has NOT passed / not enough energy)', function () {
                it('should generate a negative adventure', () => {
                    let state = create();
                    // force deplete energy
                    state = Object.assign({}, state, { energy: EnergyState.loose_all_energy(state.energy) });
                    expect(state.energy.last_available_energy_float).to.be.below(1);
                    state = play(state);
                    expect(state.last_adventure).not.to.be.null;
                    expect(state.last_adventure.good).to.be.false;
                    // again
                    state = play(state);
                    expect(state.last_adventure).not.to.be.null;
                    expect(state.last_adventure.good).to.be.false;
                });
                it('should not decrease user stats');
                it('should correctly increment counters', () => {
                    let state = create();
                    state = Object.assign({}, state, { energy: EnergyState.loose_all_energy(state.energy) });
                    state = play(state);
                    expect(state).to.have.nested.property('progress.statistics.bad_play_count', 1);
                    expect(state).to.have.nested.property('progress.statistics.bad_play_count_by_active_class.novice', 1);
                    state = play(state);
                    expect(state).to.have.nested.property('progress.statistics.bad_play_count', 2);
                    expect(state).to.have.nested.property('progress.statistics.bad_play_count_by_active_class.novice', 2);
                });
                it('should punish a bit the user (ex. by increasing the cooldown)', () => {
                    let state = create();
                    state = Object.assign({}, state, { energy: EnergyState.loose_all_energy(state.energy) });
                    // force (for tests)
                    state.energy.last_available_energy_float = .8;
                    state = play(state);
                    expect(state.last_adventure).not.to.be.null;
                    expect(state.last_adventure.good).to.be.false;
                    expect(state.energy.last_available_energy_float).to.be.below(0.0001);
                });
                it('may actually result in a good outcome (idea TODO)');
            });
            context('✅  when allowed (the cooldown has passed / enough energy)', function () {
                it('should sometime generate a story adventure', () => {
                    const state = play(create());
                    expect(state.last_adventure).not.to.be.null;
                    expect(state.last_adventure.good).to.be.true;
                });
                it('should correctly increment counters', () => {
                    let state = play(create());
                    expect(state).to.have.nested.property('progress.statistics.good_play_count', 1);
                    expect(state).to.have.nested.property('progress.statistics.good_play_count_by_active_class.novice', 1);
                    state = play(state);
                    expect(state).to.have.nested.property('progress.statistics.good_play_count', 2);
                    expect(state).to.have.nested.property('progress.statistics.good_play_count_by_active_class.novice', 2);
                });
                it('should sometime generate a fight adventure', () => {
                    let fightCount = 0;
                    let state = create();
                    for (let i = 0; i < 100; ++i) {
                        state.energy.last_available_energy_float = 7.; // for tests
                        state = play(state);
                        if (state.last_adventure.hid.startsWith('fight_'))
                            fightCount++;
                    }
                    //const EXPECTED_FIGHT_ENCOUNTER_RATIO = 0.33
                    expect(fightCount).to.be.above(10);
                    expect(fightCount).to.be.below(50);
                });
                context('when the adventure is a story', function () {
                    describe('the outcome', function () {
                        it('should sometime be a coin gain', () => {
                            let state = create();
                            state = play(state, 'dying_man');
                            // we got money
                            expect(get_currency_amount(state.wallet, Currency.coin)).to.be.above(0);
                        });
                        it('should sometime be a token gain');
                        it('should sometime be a stat gain');
                        it('should sometime be an item gain', () => {
                            let state = create();
                            state = play(state, 'rare_goods_seller');
                            // check our 2 predefined items are still present and equipped
                            expect(get_equipped_item_count(state.inventory), 'equipped').to.equal(2);
                            // a new item is present
                            expect(get_unequipped_item_count(state.inventory), 'unequipped').to.equal(1);
                            // it's a weapon !
                            expect(state.inventory.unslotted[0]).to.have.property('slot', 'armor');
                        });
                        it('should sometime be an item improvement');
                    });
                });
                context('when the adventure is a fight', function () {
                    it('should generate a suitable enemy', () => {
                        let state = create();
                        state.avatar.attributes.level = 500;
                        for (let i = 0; i < 100; ++i) {
                            state.energy.last_available_energy_float = 7.; // for tests
                            state = play(state);
                            if (state.last_adventure.hid.startsWith('fight_'))
                                break;
                        }
                        //console.log(state.last_adventure)
                        expect(state.last_adventure, 'fight adventure').to.exist;
                        expect(state.last_adventure.encounter, 'encounter field').to.exist;
                        expect(state.last_adventure.encounter.level).to.be.within(400, 600);
                    });
                });
            });
        });
        describe('inventory management', function () {
            it('should allow un-equiping an item'); // not now, but useful for ex. for immediately buying a better item on the market
            it('should allow equiping an item, correctly swapping with an already equipped item');
            it('should allow selling an item');
        });
    });
    describe('adventures', function () {
        ALL_ADVENTURE_ARCHETYPES.forEach(({ hid, good }) => {
            describe(`${good ? '✅' : '🚫'}  adventure "${hid}"`, function () {
                it('should be playable', () => {
                    let state = create();
                    if (!good) {
                        // force deplete energy
                        state = Object.assign({}, state, { energy: EnergyState.loose_all_energy(state.energy) });
                    }
                    state = play(state, hid);
                });
            });
        });
    });
});
//# sourceMappingURL=state_spec.js.map