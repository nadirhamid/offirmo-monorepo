import React from 'react';

import { GameContextConsumerListener } from '../../../../game-context'
import Component from './component'

export default props => (
	<GameContextConsumerListener>
	{game_instance => (
		<Component
			{...props}
			game_instance={game_instance}
		/>
	)}
	</GameContextConsumerListener>
)
