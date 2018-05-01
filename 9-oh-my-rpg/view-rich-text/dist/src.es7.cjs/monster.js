"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const RichText = tslib_1.__importStar(require("@offirmo/rich-text-format"));
function render_monster(m) {
    const $doc = RichText.span()
        .addClass('monster', 'monster--rank--' + m.rank)
        .pushText('{{level}} {{rank}} {{name||Capitalize}}')
        .pushRawNode(RichText.span().pushText('L').pushText('' + m.level).done(), 'level')
        .pushRawNode(RichText.span().addClass('rank--' + m.rank).pushText(m.rank).done(), 'rank')
        .pushRawNode(RichText.span().addClass('monster__name').pushText(m.name).done(), 'name')
        .done();
    $doc.$hints.possible_emoji = m.possible_emoji;
    return $doc;
}
exports.render_monster = render_monster;
//# sourceMappingURL=monster.js.map