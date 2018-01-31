import React from 'react'

const tbrpg = require('@oh-my-rpg/state-the-boring-rpg')
import { render_adventure } from '@oh-my-rpg/view-rich-text'

import { Chat } from '../../templates/chat-interface'
import { with_game_instance } from '../../context/game-instance-provider'
import { rich_text_to_react } from '../../../utils/rich_text_to_react'


class HomeBase extends React.Component {

	/*
	constructor (props) {
		super(props)
	}*/
	* gen_next_step() {
		const { instance } = this.props
		const chat_state = {
			last_displayed_adventure_uuid: (() => {
				const { last_adventure } = instance.get_latest_state()
				return last_adventure && last_adventure.uuid
			})()
		}

		do {
			const steps = []
			const state = instance.get_latest_state()
			//console.log(state)
			const { last_adventure } = state

			if (!last_adventure) {
				// recap
				steps.push({
					type: 'simple_message',
					msg_main: rich_text_to_react(tbrpg.get_recap(initial_state)),
				})
			} else if (chat_state.last_displayed_adventure_uuid !== last_adventure.uuid) {
				steps.push({
					type: 'progress',
					duration_ms: 600,
					msg_main: `Preparations: repairing equipment…`,
					msgg_acknowledge: () => '✅ Equipment repaired',
				})
				steps.push({
					type: 'progress',
					duration_ms: 700,
					msg_main: `Preparations: buying rations…`,
					msgg_acknowledge: () => '✅ Rations resupplied',
				})
				steps.push({
					type: 'progress',
					duration_ms: 800,
					msg_main: `Preparations: reviewing quests…`,
					msgg_acknowledge: () => '✅ Quests reviewed',
				})
				steps.push({
					type: 'progress',
					duration_ms: 900,
					msg_main: `Farming XP…`,
					msgg_acknowledge: () => '✅ XP farmed',
				})
				steps.push({
					type: 'progress',
					duration_ms: 1000,
					msg_main: `Exploring…`,
					msgg_acknowledge: () => 'Encountered something!\n',
				})

				const { good_click_count } = state
				//console.log({ good_click_count, last_adventure })
				const $doc = render_adventure(last_adventure)
				const msg_main = (
					<div>
						{`Episode #${good_click_count}:`}<br />
						{rich_text_to_react($doc)}
					</div>
				)

				steps.push({
					type: 'simple_message',
					msg_main,
				})

				chat_state.last_adventure = state.last_adventure
				chat_state.last_displayed_adventure_uuid = last_adventure.uuid
			}

			// tip
			let tip_msg = tbrpg.get_tip(state)
			if (tip_msg) {
				steps.push({
					type: 'simple_message',
					msg_main: tip_msg,
				})
			}

			steps.push({
				msg_main: `What do you want to do?`,
				callback: value => { console.error('not implemented') },
				choices: [
					{
						msg_cta: 'Play!',
						value: 'play',
						msgg_as_user: () => 'Let’s go adventuring!',
						callback: () => {
							instance.play()
						},
					},
					/*{
						msg_cta: 'Manage Inventory (equip, sell…)',
						value: 'inventory',
						msgg_as_user: () => 'Let’s sort out my stuff.',
						msgg_acknowledge: () => `Sure.`,
					},
					{
						msg_cta: 'Manage Character (rename, change class…)',
						value: 'character',
						msgg_as_user: () => 'Let’s see how I’m doing!',
					},
					{
						msg_cta: 'Manage other stuff…',
						value: 'meta',
						msgg_as_user: () => 'Let’s see how I’m doing!',
					},*/
				],
			})

			yield* steps
		} while (true)
	}
	/*
	componentWillMount() {
		this.step_generator = create(this.props.state)()
	}*/
/*
	componentDidMount () {
		this.element.addEventListener('click', event => {
			//console.log('click detected on', event.target)
			const {workspace} = this.props
			const state = workspace.instance.get_latest_state()

			this.addRichTextBubble('Let’s go adventuring!', {direction: 'rtl'})
			workspace.instance.play()
			this.addRichTextBubble(render_adventure(state.last_adventure))
			this.addRichTextBubble(tbrpg.get_tip(state))
			this.addRichTextBubble('What do you want to do?')
		})
	}
/*
	componentWillUnmount () {
		console.info('~~ componentWillUnmount', arguments)
	}
*/
	render() {
		return (
			<div className={'page--home'}>
				<Chat gen_next_step={this.gen_next_step()} />
			</div>
		)
	}
}

const Home = with_game_instance(HomeBase)

export {
	Home,
}
