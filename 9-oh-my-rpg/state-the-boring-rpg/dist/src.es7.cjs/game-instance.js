"use strict";
/* A helper for actual games using this model
 * TODO extract
 * TODO force refresh on client state change
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const EventEmitter = require('emittery');
const deep_merge = require('deepmerge').default;
const state_inventory_1 = require("@oh-my-rpg/state-inventory");
const state_fns = tslib_1.__importStar(require("./state"));
const selectors = tslib_1.__importStar(require("./selectors"));
const migrations_1 = require("./state/migrations");
const serialization_1 = require("./serialization");
function overwriteMerge(destination, source) {
    return source;
}
function create_game_instance({ SEC, get_latest_state, persist_state, client_state }) {
    return SEC.xTry('creating tbrpg instance', ({ SEC, logger }) => {
        SEC.xTry('auto creating/migrating', ({ SEC, logger }) => {
            let state = get_latest_state();
            // need this check due to some serializations returning {} for empty
            const was_empty_state = !state || Object.keys(state).length === 0;
            state = was_empty_state
                ? state_fns.create(SEC)
                : migrations_1.migrate_to_latest(SEC, state);
            // TODO enqueue in engagement?
            if (was_empty_state) {
                logger.verbose('Clean savegame created from scratch:', { state });
            }
            else {
                logger.trace('migrated state:', { state });
            }
            persist_state(state);
        });
        client_state = client_state || {};
        const emitter = new EventEmitter();
        return {
            reducers: {
                play() {
                    let state = get_latest_state();
                    state = state_fns.play(state);
                    persist_state(state);
                    emitter.emit('state_change');
                },
                equip_item(uuid) {
                    let state = get_latest_state();
                    state = state_fns.equip_item(state, uuid);
                    persist_state(state);
                    emitter.emit('state_change');
                },
                sell_item(uuid) {
                    let state = get_latest_state();
                    state = state_fns.sell_item(state, uuid);
                    persist_state(state);
                    emitter.emit('state_change');
                },
                rename_avatar(new_name) {
                    let state = get_latest_state();
                    state = state_fns.rename_avatar(state, new_name);
                    persist_state(state);
                    emitter.emit('state_change');
                },
                change_avatar_class(new_class) {
                    let state = get_latest_state();
                    state = state_fns.change_avatar_class(state, new_class);
                    persist_state(state);
                    emitter.emit('state_change');
                },
                execute_serialized_action(action) {
                    let state = get_latest_state();
                    state = serialization_1.reduce_action(state, action);
                    persist_state(state);
                    emitter.emit('state_change');
                },
            },
            selectors: {
                get_item(uuid) {
                    let state = get_latest_state();
                    return state_inventory_1.get_item(state.inventory, uuid);
                },
                appraise_item_value(uuid) {
                    let state = get_latest_state();
                    return selectors.appraise_item_value(state, uuid);
                },
                appraise_item_power(uuid) {
                    let state = get_latest_state();
                    return selectors.appraise_item_power(state, uuid);
                },
                find_element(uuid) {
                    let state = get_latest_state();
                    return selectors.find_element(state, uuid);
                },
                get_actions_for_element(uuid) {
                    let state = get_latest_state();
                    return serialization_1.get_actions_for_element(state, uuid);
                },
            },
            model: {
                get_state: get_latest_state,
                reset_state() {
                    let state = state_fns.create();
                    state = state_fns.reseed(state);
                    persist_state(state);
                    logger.verbose('Savegame reseted:', { state });
                    emitter.emit('state_change');
                },
            },
            subscribe(fn) {
                const unbind = emitter.on('state_change', fn);
                return unbind;
            },
            view: {
                // allow managing a transient state
                set_state(fn) {
                    const changed = fn(client_state);
                    client_state = Object.assign({}, deep_merge(client_state, changed, {
                        arrayMerge: overwriteMerge,
                    }));
                    emitter.emit('state_change');
                },
                get_state() {
                    return client_state;
                },
            }
        };
    });
}
exports.create_game_instance = create_game_instance;
//# sourceMappingURL=game-instance.js.map