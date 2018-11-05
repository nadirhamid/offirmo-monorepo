import React from 'react'

import './index.css'

const DELAY_MS = 150

// https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
class AutoScrollDown extends React.Component {

	scrollToBottom = () => {
		if (this.messagesEnd)
			this.messagesEnd.scrollIntoView({ behavior: 'instant' }) // could be smooth
	}

	componentDidMount() {
		setTimeout(() => this.scrollToBottom(), DELAY_MS)
	}

	componentDidUpdate() {
		setTimeout(() => this.scrollToBottom(), DELAY_MS)
	}

	render() {
		return (
			<div className={'auto-scroll-down'}>

				{this.props.children}

				<div style={{ float:"left", clear: "both" }} ref={el => this.messagesEnd = el} />
			</div>
		)
	}
}

export {
	AutoScrollDown,
}

