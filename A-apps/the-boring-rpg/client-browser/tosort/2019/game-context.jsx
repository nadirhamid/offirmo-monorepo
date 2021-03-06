// TODO clean!!!

import React from 'react'
import poll_window_variable from '@offirmo/poll-window-variable'
import { create_game_instance } from '@tbrpg/state'

import { LS_KEYS } from './services/consts'
import SEC from './services/sec'
import get_game_instance from './services/game-instance-browser'

let game_instance = get_game_instance()

const GameContext = React.createContext(game_instance)

class GameContextAsPropsListener extends React.Component {
	componentDidMount() {
		//console.info('~~ GameContextListener componentDidMount')
		// subscribe to future state changes
		this.unsubscribe = game_instance.subscribe('LEG-game-context', () => {
			//console.log('forcing update on game state change')
			this.forceUpdate()
		})
	}
	componentWillUnmount () {
		//console.info('~~ GameContextListener componentWillUnmount', arguments)
		this.unsubscribe()
	}

	render() {
		console.log("🔄 (LEG) GameContextAsPropsListener");
		return this.props.children(game_instance)
	}
}

// TODO redo properly
function GameContextConsumerListener({children}) {
	return (
		<GameContext.Consumer>
			{game_instance => {
				//console.log('GameContextConsumerListener re-called')
				return (
					<GameContextAsPropsListener game_instance={game_instance}>
						{children}
					</GameContextAsPropsListener>
				)
			}}
		</GameContext.Consumer>
	)
}

export {
	//game_instance,
	GameContext,
	GameContextConsumerListener,
}

export default GameContext
