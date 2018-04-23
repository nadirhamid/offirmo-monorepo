import React, { Component, Fragment } from 'react';

import UniverseAnchor from '../../../universe-anchor'
import ExplorePane from '../../../chats/explore'
import MetaPane from '../../../chats/meta'
import OhMyRpg from '../../../oh-my-rpg-ui'

import './index.css';
import logo from './tbrpg_logo_512x98.png';


export default class TheBoringRPG extends Component {
	render() {
		return (
			<OhMyRpg

				logo={<a href="https://www.online-adventur.es/the-boring-rpg/" target="_blank"><img src={logo} height="100%" /></a>}

				universeAnchor={<UniverseAnchor />}

				hamburgerPanel={<MetaPane />}

				bottomMenuItems={[
					<span key="explore" className="omr⋄bottom-menu⁚icon icomoon-treasure-map" />,
					<span key="character" className="omr⋄bottom-menu⁚icon icomoon-battle-gear" />,
					<span key="inventory" className="omr⋄bottom-menu⁚icon icomoon-locked-chest" />,
					<span key="chat" className="omr⋄bottom-menu⁚icon icomoon-conversation" />,
				]}
			>
				<div key="background-picture"
					className="omr⋄plane⁚immersion omr⋄full-size-fixed-layer omr⋄bg⁚cover tbrpg⋄bg-image⁚fields_of_gold">
					<div key="content-area" className="omr⋄content-area">
						<ExplorePane />
					</div>
				</div>
			</OhMyRpg>
		)
	}
}
