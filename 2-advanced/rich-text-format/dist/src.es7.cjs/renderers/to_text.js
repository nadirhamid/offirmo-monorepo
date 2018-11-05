"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../consts");
const walk_1 = require("../walk");
const common_1 = require("./common");
exports.DEFAULT_OPTIONS = {
    style: 'advanced'
};
const DEFAULT_STATE = Object.freeze({
    sub_nodes: [],
    starts_with_block: false,
    ends_with_block: false,
    margin_top: 0,
    margin_bottom: 0,
    str: '',
});
const on_node_exit = ({ state, $node, depth }, { style }) => {
    //console.log('[on_type]', { $type, state })
    switch ($node.$type) {
        case 'br':
            state.ends_with_block = true;
            break;
        default:
            break;
    }
    if (style === 'markdown') {
        switch ($node.$type) {
            case 'heading':
                state.str = `### ${state.str}`;
                state.margin_top = Math.max(state.margin_top, 1);
                state.margin_bottom = Math.max(state.margin_bottom, 1);
                break;
            case 'strong':
                state.str = `**${state.str}**`;
                break;
            case 'em':
                state.str = `_${state.str}_`;
                break;
            case 'hr':
                state.str = '---';
                break;
            default:
                break;
        }
        if (common_1.is_link($node))
            state.str = `[${state.str}](${$node.$hints.href})`;
    }
    else {
        switch ($node.$type) {
            case 'heading':
                state.margin_top = Math.max(state.margin_top, 1);
                break;
            case 'hr':
                state.str = '------------------------------------------------------------';
                break;
            default:
                break;
        }
        if (style === 'advanced' && common_1.is_KVP_list($node)) {
            // rewrite completely to a better-looking one
            const key_value_pairs = [];
            let max_key_length = 0;
            let max_value_length = 0;
            state.sub_nodes.forEach(li_node => {
                //console.log({li_node})
                const kv_node = li_node.$sub.content;
                const key_node = kv_node.$sub.key;
                const value_node = kv_node.$sub.value;
                const key_text = to_text(key_node);
                const value_text = to_text(value_node);
                max_key_length = Math.max(max_key_length, key_text.length);
                max_value_length = Math.max(max_value_length, value_text.length);
                key_value_pairs.push([key_text, value_text]);
            });
            state.str = key_value_pairs.map(([key_text, value_text]) => {
                return key_text.padEnd(max_key_length + 1, '.') + value_text.padStart(max_value_length + 1, '.');
            }).join('\n');
        }
    }
    if (consts_1.NODE_TYPE_TO_DISPLAY_MODE[$node.$type] === 'block') {
        state.starts_with_block = true;
        state.ends_with_block = true;
    }
    return state;
};
const on_concatenate_sub_node = ({ state, sub_state, $node, $id, $parent_node }, { style }) => {
    let sub_str = sub_state.str;
    let sub_starts_with_block = sub_state.starts_with_block;
    state.sub_nodes.push($node);
    switch ($parent_node.$type) {
        case 'ul': {
            // automake sub-state a ul > li
            const bullet = (() => {
                if ($parent_node.$hints.bullets_style === 'none' && style === 'advanced')
                    return '';
                return '- ';
            })();
            sub_starts_with_block = true;
            sub_str = bullet + sub_str;
            break;
        }
        case 'ol': {
            // automake sub-state a ol > li
            const bullet = (() => {
                if (style === 'markdown')
                    return `${$id}. `;
                return `${(' ' + $id).slice(-2)}. `;
            })();
            sub_starts_with_block = true;
            sub_str = bullet + sub_str;
            break;
        }
        default:
            break;
    }
    /*console.log('on_concatenate_sub_node()', {
        sub_node: $node,
        sub_state: {
            ...sub_state,
                str: sub_str,
                starts_with_block: sub_starts_with_block,
        },
        state: JSON.parse(JSON.stringify(state)),
    })*/
    if (state.str.length === 0) {
        // we are at start
        if (sub_state.starts_with_block) {
            // propagate start
            state.starts_with_block = true;
            state.margin_top = Math.max(state.margin_top, sub_state.margin_top);
        }
    }
    else {
        if (state.ends_with_block || sub_starts_with_block) {
            state.str += ''.padStart(Math.max(state.margin_bottom, sub_state.margin_top) + 1, '\n');
        }
    }
    state.str += sub_str;
    state.ends_with_block = sub_state.ends_with_block;
    return state;
};
const callbacks = {
    on_node_enter: () => (Object.assign({}, DEFAULT_STATE, { sub_nodes: [] })),
    on_concatenate_str: ({ state, str }) => {
        //console.log('on_concatenate_str()', {str, state: JSON.parse(JSON.stringify(state)),})
        if (state.ends_with_block) {
            state.str += ''.padStart(state.margin_bottom + 1, '\n');
            state.ends_with_block = false;
            state.margin_bottom = 0;
        }
        state.str += str;
        return state;
    },
    on_concatenate_sub_node,
    on_node_exit,
};
exports.callbacks = callbacks;
function to_text($doc, options = exports.DEFAULT_OPTIONS, callback_overrides = {}) {
    return walk_1.walk($doc, Object.assign({}, callbacks, callback_overrides), options).str;
}
exports.to_text = to_text;
// TODO capitalize
//# sourceMappingURL=to_text.js.map