import React from 'react';

import './index.css'

export default function UniverseAnchor({onClick, name, klass, level}) {
	return (
		<div className="o⋄flex-row" onClick={onClick}>
			<span className="icomoon-user status⁚avatar--icon" />
			<div className="status⁚avatar--details o⋄flex-column">
				<span>{name}</span>
				<span className="universe-anchor__klass">{klass} L.{level}</span>
			</div>
		</div>
	)
}
