import * as RichText from '@offirmo/rich-text-format'
import { State as CharacterState, CharacterAttribute, CHARACTER_ATTRIBUTES_SORTED } from '@oh-my-rpg/state-character'


function render_avatar(state: CharacterState): RichText.Document {
	// TODO refactor
	const $doc_name = RichText.span().addClass('avatar__name').pushText(state.name).done()
	const $doc_class = RichText.span().addClass('avatar__class').pushText(state.klass).done()

	const $doc = RichText.block_fragment()
		.pushNode(RichText.heading().pushText('Identity:').done(), 'header')
		.pushNode(
			RichText.unordered_list()
				.pushKeyValue('name', $doc_name)
				.pushKeyValue('class', $doc_class)
				.done()
		)
		.done()

	return $doc
}

function render_attributes(state: CharacterState): RichText.Document {
	const $doc_list = RichText.unordered_list()
		.addClass('attributes')
		.done()

	// TODO better sort
	CHARACTER_ATTRIBUTES_SORTED.forEach((stat: CharacterAttribute, index: number) => {
		const label = stat
		const value = state.attributes[stat]

		const $doc_attr = RichText.key_value(label, `${value}`).done()

		$doc_list.$sub['' + index] = $doc_attr


	})

	const $doc = RichText.block_fragment()
		.pushNode(RichText.heading().pushText('Attributes:').done(), 'header')
		.pushNode($doc_list, 'list')
		.done()

	return $doc
}


function render_character_sheet(state: CharacterState): RichText.Document {
	const $doc = RichText.block_fragment()
		.pushNode(render_avatar(state), 'avatar')
		.pushNode(render_attributes(state), 'attributes')
		.done()

	return $doc
}

export {
	render_avatar,
	render_attributes,
	render_character_sheet,
}
