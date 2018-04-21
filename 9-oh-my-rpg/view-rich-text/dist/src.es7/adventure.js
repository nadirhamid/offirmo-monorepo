import { ITEM_SLOTS } from '@oh-my-rpg/definitions';
import { CHARACTER_ATTRIBUTES } from '@oh-my-rpg/state-character';
import { i18n_messages as I18N_ADVENTURES } from '@oh-my-rpg/logic-adventures';
import { ALL_CURRENCIES } from '@oh-my-rpg/state-wallet';
import * as RichText from '@offirmo/rich-text-format';
import { render_item } from './items';
import { render_currency_amount } from './wallet';
import { render_monster } from './monster';
// TODO render attribute
function render_adventure(a) {
    const gains = a.gains; // alias for typing
    // in this special function, we'll be:
    // 1. generically filling a RichText.Document with any possible sub-elements,
    //    since we don't know whether the adventure messages use them or not.
    const $story_sub_elements = {};
    // encounter
    // item
    // attr, attr_name,
    // level, health, mana, strength, agility, charisma, wisdom, luck
    // coin
    // improved_item
    // 2. also generate some "summaries" for some gains
    let $listing_of_loot = RichText.span().done();
    let $listing_of_character_improvement = RichText.span().done();
    let $listing_of_item_improvement = RichText.span().done();
    // make sure that we handled every possible outcomes
    const handled_adventure_outcomes_so_far = new Set();
    (function render_loot() {
        const $loot_list = RichText.unordered_list().done();
        ITEM_SLOTS.forEach((slot) => {
            //console.info('handling adventure outcome [l1]: ' + slot)
            if (!gains[slot])
                return;
            const $doc = render_item(gains[slot]);
            $story_sub_elements.item = $doc;
            $story_sub_elements.item_slot = RichText.span().pushText(slot).done();
            $story_sub_elements[slot] = $doc;
            $loot_list.$sub[slot] = $doc;
            handled_adventure_outcomes_so_far.add(slot);
        });
        ALL_CURRENCIES.forEach((currency) => {
            //console.info('handling adventure outcome [l2]: ' + currency)
            if (!gains[currency])
                return;
            const $doc = render_currency_amount(currency, gains[currency]);
            $loot_list.$sub[currency] = $story_sub_elements[currency] = $doc;
            handled_adventure_outcomes_so_far.add(currency);
        });
        const hasLoot = !!Object.keys($loot_list.$sub).length;
        if (hasLoot)
            $listing_of_loot = RichText.section()
                .pushLineBreak()
                .pushText('Loot:')
                .pushNode($loot_list, 'list')
                .done();
    })();
    (function render_character_improvement() {
        const $improvement_list = RichText.unordered_list().done();
        CHARACTER_ATTRIBUTES.forEach((attr) => {
            //console.info('handling adventure outcome [c1]: ' + attr)
            if (!gains[attr])
                return;
            $story_sub_elements.attr_name = RichText.span().pushText(attr).done();
            const $doc_attr_gain_value = RichText.span().pushText('' + gains[attr]).done();
            $story_sub_elements.attr = $doc_attr_gain_value; // generic
            $story_sub_elements[attr] = $doc_attr_gain_value; // precise
            $improvement_list.$sub[attr] = attr === 'level'
                ? RichText.span().pushText('🆙 You leveled up!').done()
                : RichText.span().pushText(`You improved your ${attr} by ${gains[attr]}!`).done(); // TODO improve
            handled_adventure_outcomes_so_far.add(attr);
        });
        // TODO one day spells / skills
        const has_improvement = !!Object.keys($improvement_list.$sub).length;
        if (has_improvement)
            $listing_of_character_improvement = RichText.section()
                .pushLineBreak()
                .pushText('Character improvement:')
                .pushNode($improvement_list, 'list')
                .done();
    })();
    (function render_item_improvement() {
        const has_improvement = gains.armor_improvement || gains.weapon_improvement;
        const $improvement_list = RichText.unordered_list().done();
        // TODO
        if (gains.armor_improvement)
            handled_adventure_outcomes_so_far.add('armor_improvement');
        if (gains.weapon_improvement)
            handled_adventure_outcomes_so_far.add('weapon_improvement');
        if (has_improvement)
            $listing_of_item_improvement = RichText.section()
                .pushLineBreak()
                .pushText('Item improvement:')
                .pushNode($improvement_list, 'list')
                .done();
    })();
    /////// Encounter ///////
    if (a.encounter)
        $story_sub_elements.encounter = render_monster(a.encounter);
    /////// checks ///////
    const active_adventure_outcomes = Object.keys(gains).filter(prop => !!gains[prop]);
    const unhandled_adventure_outcomes = active_adventure_outcomes.filter(prop => !handled_adventure_outcomes_so_far.has(prop));
    if (unhandled_adventure_outcomes.length) {
        console.error(`render_adventure(): *UN*handled outcome properties: "${unhandled_adventure_outcomes}"!`);
        console.info(`render_adventure(): handled outcome properties: "${Array.from(handled_adventure_outcomes_so_far.values())}"`);
        throw new Error(`render_adventure(): unhandled outcome properties!`);
    }
    /////// Final wrap-up //////
    const _ = I18N_ADVENTURES.en;
    const story = _.adventures[a.hid];
    const $doc = RichText.section()
        .pushText(story)
        //.pushLineBreak()
        //.pushNode($listing_of_loot, 'loot')
        //.pushNode($listing_of_item_improvement, 'item_improv')
        //.pushNode($listing_of_character_improvement, 'char_improv')
        .done();
    $doc.$sub = Object.assign({}, $doc.$sub, $story_sub_elements);
    return $doc;
}
export { render_adventure, };
//# sourceMappingURL=adventure.js.map