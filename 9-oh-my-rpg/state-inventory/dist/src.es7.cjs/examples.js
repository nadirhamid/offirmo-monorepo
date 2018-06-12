"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const deep_freeze_strict_1 = tslib_1.__importDefault(require("deep-freeze-strict"));
const logic_weapons_1 = require("@oh-my-rpg/logic-weapons");
const logic_armors_1 = require("@oh-my-rpg/logic-armors");
// needed to test migrations, both here and in composing parents
// a full featured, non-trivial demo state
// needed for demos
const DEMO_STATE = deep_freeze_strict_1.default({
    schema_version: 1,
    revision: 42,
    unslotted_capacity: 20,
    slotted: {
        armor: logic_armors_1.DEMO_ARMOR_2,
        weapon: logic_weapons_1.DEMO_WEAPON_1,
    },
    unslotted: [
        logic_weapons_1.DEMO_WEAPON_2,
        logic_armors_1.DEMO_ARMOR_1,
    ],
});
exports.DEMO_STATE = DEMO_STATE;
// the oldest format we can migrate from
// must correspond to state above
const OLDEST_LEGACY_STATE_FOR_TESTS = DEMO_STATE; // TODO ALPHA freeze this
exports.OLDEST_LEGACY_STATE_FOR_TESTS = OLDEST_LEGACY_STATE_FOR_TESTS;
// some hints may be needed to migrate to demo state
const MIGRATION_HINTS_FOR_TESTS = deep_freeze_strict_1.default({});
exports.MIGRATION_HINTS_FOR_TESTS = MIGRATION_HINTS_FOR_TESTS;
/////////////////////
//# sourceMappingURL=examples.js.map