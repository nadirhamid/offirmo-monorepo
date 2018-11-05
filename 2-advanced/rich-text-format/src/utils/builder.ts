import { LIB, SCHEMA_VERSION } from '../consts'

import {
	NodeType,
	CheckedNode,
	Node,
	Document,
} from '../types'


interface Builder {
	addClass(...classes: string[]): Builder
	pushText(str: string): Builder
	pushStrong(str: string, id?: string): Builder
	pushEmphasized(str: string, id?: string): Builder
	pushRawNode(node: Node, id?: string): Builder
	pushNode(node: Node, id?: string): Builder
	pushLineBreak(): Builder
	pushHorizontalRule(): Builder
	pushKeyValue(key: Node | string, value: Node | string, id?: string): Builder
	done(): CheckedNode
}


function create($type: NodeType): Builder {

	const $node: CheckedNode = {
		$v: SCHEMA_VERSION,
		$type,
		$classes: [],
		$content: '',
		$sub: {},
		$hints: {},
	}

	const builder: Builder = {
		addClass,
		pushText,
		pushStrong,
		pushEmphasized,
		pushRawNode,
		pushNode,
		pushLineBreak,
		pushHorizontalRule,
		pushKeyValue,
		done,
	}

	let sub_id = 0

	function addClass(...classes: string[]): Builder {
		$node.$classes.push(...classes)
		return builder
	}

	function pushText(str: string): Builder {
		$node.$content += str
		return builder
	}

	// nothing is added in content
	// useful for
	// 1. lists
	// 2. manual stuff
	function pushRawNode(node: Node, id?: string): Builder {
		id = id || ('000' + ++sub_id).slice(-4)
		$node.$sub[id] = node
		return builder
	}

	// node ref is auto added into content
	function pushNode(node: Node, id?: string): Builder {
		id = id || ('000' + ++sub_id).slice(-4)
		$node.$content += `{{${id}}}`
		return pushRawNode(node, id)
	}

	function pushStrong(str: string, id?: string): Builder {
		const node = strong()
			.pushText(str)
			.done()

		return pushNode(node, id)
	}

	function pushEmphasized(str: string, id?: string): Builder {
		const node = emphasized()
			.pushText(str)
			.done()

		return pushNode(node, id)
	}

	function pushLineBreak(): Builder {
		$node.$content += '{{br}}'
		return builder
	}

	function pushHorizontalRule(): Builder {
		$node.$content += '{{hr}}'
		return builder
	}

	function pushKeyValue(key: Node | string, value: Node | string, id?: string): Builder {
		if ($node.$type !== NodeType.ol && $node.$type !== NodeType.ul)
			throw new Error(`${LIB}: Key/value is intended to be used in a ol/ul only!`)

		const kv_node: Node = key_value(key, value).done()

		return pushRawNode(kv_node, id)
	}

	function done(): CheckedNode {
		return $node
	}

	return builder
}

function inline_fragment(): Builder {
	return create(NodeType.inline_fragment)
}
function block_fragment(): Builder {
	return create(NodeType.block_fragment)
}

function heading(): Builder {
	return create(NodeType.heading)
}

function strong(): Builder {
	return create(NodeType.strong)
}

function emphasized(): Builder {
	return create(NodeType.em)
}

function span(): Builder {
	return create(NodeType.span)
}

function ordered_list(): Builder {
	return create(NodeType.ol)
}

function unordered_list(): Builder {
	return create(NodeType.ul)
}

function key_value(key: Node | string, value: Node | string): Builder {
	const key_node: Node = typeof key === 'string'
		? span().pushText(key).done()
		: key

	const value_node: Node = typeof value === 'string'
		? span().pushText(value).done()
		: value

	return inline_fragment()
		.pushNode(key_node, 'key')
		.pushText(': ')
		.pushNode(value_node, 'value')
}

export {
	NodeType,
	Document,
	Builder,

	create,

	inline_fragment,
	block_fragment,
	heading,
	span,
	ordered_list,
	unordered_list,
	key_value,
}