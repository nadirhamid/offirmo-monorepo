import { expect } from 'chai';
import { SCHEMA_VERSION } from './consts';
import { AchievementStatus } from './types';
import { create, get_sorted_visible_achievements, } from '.';
describe('state - reducer', function () {
    const EXPECTED_CURRENCY_SLOT_COUNT = 2;
    describe('🆕 initial state', function () {
        it('should have correct defaults', function () {
            const state = create();
            expect(state).to.deep.equal({
                schema_version: SCHEMA_VERSION,
                revision: 0,
                statistics: {
                // TODO
                }
            });
        });
    });
    describe('get_sorted_visible_achievements()', function () {
        it('should work on initial state', function () {
            const state = create();
            expect(get_sorted_visible_achievements(state)).to.deep.equal([
                {
                    key: 'The First Step',
                    status: AchievementStatus.unlocked,
                }
            ]);
        });
    });
});
//# sourceMappingURL=state_spec.js.map