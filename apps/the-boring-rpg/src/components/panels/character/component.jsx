import React from 'react'

const { CHARACTER_CLASSES } = require('@oh-my-rpg/state-character')
import { render_character_sheet } from '@oh-my-rpg/view-rich-text'

import { is_likely_to_be_mobile } from '../../../services/mobile-detection'
import { Chat } from '../../chat-interface'
import rich_text_to_react from '../../../utils/rich_text_to_react'
import './index.css'


export default class Component extends React.Component {
	state = {
		mobile_keyboard_likely_present: false,
	};

	* gen_next_step() {
		const { game_instance } = this.props

		do {
			const steps = []
			const state = game_instance.get_latest_state()
			const ui_state = game_instance.get_client_state()
			//console.log({ui_state, state})

			if (ui_state.character_changing_class) {
				steps.push({
					msg_main: 'Choose your path wisely:',
					choices: CHARACTER_CLASSES
						.filter(klass => klass !== 'novice')
						.map(klass => ({
							msg_cta: klass,
							value: klass,
							msgg_as_user: () => `I want to follow the path of the ${klass}!`,
							msgg_acknowledge: () => `You’ll make an amazing ${klass}.`,
							callback: value => {
								game_instance.change_avatar_class(value)
								game_instance.set_client_state(() => ({
									character_changing_class: false,
								}))
							}
						}))
				})
			}
			else if (ui_state.character_changing_name) {
				steps.push({
					type: 'ask_for_string',
					msg_main: `What’s your name?`,
					msgg_as_user: value => value
						? `My name is "${value}".`
						: 'Nevermind.',
					msgg_acknowledge: name => name
						? `You are now known as ${name}!`
						: 'Maybe another time.',
					callback: value => {
						console.log({value, type: typeof value})
						if (value)
							game_instance.rename_avatar(value)
						game_instance.set_client_state(() => ({
							character_changing_name: false,
						}))
					},
				})
			}
			else {
				steps.push({
					msg_main: 'What do you want to do?',
					choices: [
						{
							msg_cta: 'Change class',
							value: 'c',
							msgg_as_user: () => 'I want to follow the path of…',
							callback: () => {
								game_instance.set_client_state(() => ({
									character_changing_class: true,
								}))
							}
						},
						{
							msg_cta: 'Rename hero',
							value: 'r',
							msgg_as_user: () => 'Let’s fix my name…',
							callback: () => {
								game_instance.set_client_state(() => ({
									character_changing_name: true,
								}))
							}
						},
					],
				})
			}

			yield* steps
		} while (true)
	}

	render() {
		console.log('Character is refreshing')
		const { game_instance } = this.props
		const state = game_instance.get_latest_state()

		return (
			<div className={'tbrpg-panel tbrpg-panel--character o⋄flex--column'}>
				{this.state.mobile_keyboard_likely_present
					? '(temporarily hidden while you type on mobile)'
					: <div className='panel-top-content o⋄flex-element--nogrow'>
						{rich_text_to_react(render_character_sheet(state.avatar))}
					</div>}
				<div className='o⋄flex-element--grow o⋄overflow-y⁚auto'>
					<Chat
						gen_next_step={this.gen_next_step()}
						on_input_begin={() => {
							console.log('input start')
							this.setState(() => ({
								mobile_keyboard_likely_present: is_likely_to_be_mobile(),
							}))
						}}
						on_input_end={() => {
							console.log('unput stop')
							this.setState(() => ({
								mobile_keyboard_likely_present: false,
							}))
						}}
					/>
				</div>
			</div>
		)
	}
}
