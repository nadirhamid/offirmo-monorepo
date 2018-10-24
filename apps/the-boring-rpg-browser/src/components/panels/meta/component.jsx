import React from 'react'
import PropTypes from 'prop-types'

import * as RichText from '@offirmo/rich-text-format'
import { THE_BORING_RPG } from '@offirmo/marketing-rsrc'
import { SCHEMA_VERSION, GAME_VERSION } from '@oh-my-rpg/state-the-boring-rpg'

import NetlifyWidget from '../../misc/netlify'
import { Chat } from '../../utils/chat-interface'
import rich_text_to_react from '../../../services/rich-text-to-react'
import { VERSION, BUILD_DATE } from '../../../services/build.json'
import SEC from '../../../services/sec'
import { ROUTES } from '../../../services/routes'
import ErrorBoundary from '@offirmo/react-error-boundary'


export function render_meta(state) {
	const { CHANNEL, ENV } = SEC.getInjectedDependencies()
	const $doc_list_builder = RichText.unordered_list()
	$doc_list_builder.pushRawNode(
		RichText.span().pushText(`Play count: ${state.good_click_count}`).done(),
		'01-playcount'
	)
	$doc_list_builder.pushRawNode(
		RichText.span().pushText(`Game version: ${VERSION}`).done(),
		'02-version'
	)
	$doc_list_builder.pushRawNode(
		RichText.span().pushText(`Build date (UTC): ${BUILD_DATE}`).done(),
		'03-builddate'
	)
	$doc_list_builder.pushRawNode(
		RichText.span().pushText(`Release channel: ${CHANNEL}`).done(),
		'04-channel'
	)
	$doc_list_builder.pushRawNode(
		RichText.span().pushText(`Exec env: ${ENV}`).done(),
		'05-env'
	)
	$doc_list_builder.pushRawNode(
		RichText.span().pushText(`Engine version: ${GAME_VERSION}`).done(),
		'06-engine'
	)
	$doc_list_builder.pushRawNode(
		RichText.span().pushText(`Savegame version: ${SCHEMA_VERSION}`).done(),
		'07-savegame'
	)

	const $doc = RichText.span()
		.pushNode(RichText.heading().pushText('Client infos:').done(), 'header')
		.pushNode($doc_list_builder.done(), 'list')
		.done()

	return $doc
}

export default class Component extends React.Component {
	static propTypes = {
		game_instance: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired,
	};

	* gen_next_step() {
		const { history } = this.props

		do {
			const steps = []

			steps.push({
				msg_main: 'What do you want to do?',
				msgg_acknowledge: url => <span>Now opening <a href={url} target="_blank">{url}</a></span>,
				callback: url => window.open(url, '_blank', 'noopener'),
				choices: [
					{
						msg_cta: '👍 Like on social medias',
						value: THE_BORING_RPG.aggregated_links_url,
						msgg_as_user: () => 'You’re awesome…',
					},
					{
						msg_cta: 'Report a bug 🐞',
						value: THE_BORING_RPG.issues_url,
						msgg_as_user: () => 'There is this annoying bug…',
					},
					{
						msg_cta: '⚙ Save/load/reset your savegame',
						value: 'save',
						msgg_as_user: () => 'Let’s mess with my savegame…',
						callback: async () => {
							history.push(ROUTES.savegame)
							// trick: we'll navigate, causing this chat to be unmounted
							// which is hard to sync. Delay resolution so that
							// the chat doesn't try to advance until we're already unmounted.
							// TODO improve further (intercept return of this func?)
							return new Promise(resolve => setTimeout(resolve, 2000))
						}
					},
					{
						msg_cta: 'Reload page ↻',
						value: 'reload',
						msgg_as_user: () => 'Reload the page.',
						msgg_acknowledge: () => 'Reloading...',
						callback: async () => window.location.reload(),
					},
				],
			})

			yield* steps
		} while (true)
	}

	render() {
		const { game_instance } = this.props
		const state = game_instance.model.get_state()

		return (
			<div className={'tbrpg-panel o⋄flex--column'}>
				<NetlifyWidget />
				<div className='panel-top-content o⋄flex-element--nogrow'>
					{rich_text_to_react(render_meta(state))}
					<hr/>
				</div>
				<div className='o⋄flex-element--grow o⋄overflow-y⁚auto'>
					<ErrorBoundary name={'chat:meta'}>
						<Chat gen_next_step={this.gen_next_step()} />
					</ErrorBoundary>
				</div>
			</div>
		)
	}
}
