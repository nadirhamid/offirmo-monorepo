////////////////////////////////////
////////////
// actualized strength
// quality multipliers (see spreadsheet for calculation)
const QUALITY_STRENGTH_MULTIPLIER = {
    common: 1,
    uncommon: 19,
    rare: 46,
    epic: 91,
    legendary: 182,
    artifact: 333,
};
const QUALITY_STRENGTH_SPREAD = {
    common: 6,
    uncommon: 5,
    rare: 4,
    epic: 3,
    legendary: 2,
    artifact: 1,
};
const ENHANCEMENT_MULTIPLIER = 0.2;
function get_interval(base_strength, quality, enhancement_level, coef = 1) {
    const spread = QUALITY_STRENGTH_SPREAD[quality];
    const strength_multiplier = QUALITY_STRENGTH_MULTIPLIER[quality];
    const enhancement_multiplier = (1 + ENHANCEMENT_MULTIPLIER * enhancement_level);
    // constrain interval
    const min_strength = Math.max(base_strength - spread, 1);
    const max_strength = Math.min(base_strength + spread, 20);
    return [
        Math.round(min_strength * strength_multiplier * enhancement_multiplier * coef),
        Math.round(max_strength * strength_multiplier * enhancement_multiplier * coef)
    ];
}
////////////////////////////////////
export { QUALITY_STRENGTH_MULTIPLIER, QUALITY_STRENGTH_SPREAD, ENHANCEMENT_MULTIPLIER, get_interval, };
////////////////////////////////////
//# sourceMappingURL=consts.js.map