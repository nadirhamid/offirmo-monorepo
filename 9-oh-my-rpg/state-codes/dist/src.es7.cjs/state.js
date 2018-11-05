"use strict";
/////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const timestamps_1 = require("@offirmo/timestamps");
const consts_1 = require("./consts");
const selectors_1 = require("./selectors");
const sec_1 = require("./sec");
const normalize_code_1 = tslib_1.__importDefault(require("./normalize-code"));
/////////////////////
function create(SEC) {
    return sec_1.get_lib_SEC(SEC).xTry('create', ({ enforce_immutability }) => {
        return enforce_immutability({
            schema_version: consts_1.SCHEMA_VERSION,
            revision: 0,
            redeemed_codes: {},
        });
    });
}
exports.create = create;
/////////////////////
function redeem_code(SEC, state, code, infos) {
    return sec_1.get_lib_SEC(SEC).xTry('redeem_code', ({ enforce_immutability }) => {
        if (!selectors_1.is_code_redeemable(state, code, infos))
            throw new Error(`This code is either non-existing or non redeemable at the moment!`);
        code = normalize_code_1.default(code);
        const r = state.redeemed_codes[code] || {
            redeem_count: 0,
            last_redeem_date_minutes: '',
        };
        return enforce_immutability(Object.assign({}, state, { redeemed_codes: Object.assign({}, state.redeemed_codes, { [code]: Object.assign({}, r, { redeem_count: r.redeem_count + 1, last_redeem_date_minutes: timestamps_1.get_human_readable_UTC_timestamp_minutes() }) }), revision: state.revision + 1 }));
    });
}
exports.redeem_code = redeem_code;
/////////////////////
//# sourceMappingURL=state.js.map