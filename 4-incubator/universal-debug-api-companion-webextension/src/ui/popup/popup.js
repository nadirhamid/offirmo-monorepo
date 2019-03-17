import 'babel-polyfill'

const LIB = '🧩 UWDT/pop'

console.log(`🧩 [T=${+Date.now()}] Hello from popup!`)

async function get_current_tab() {
	return new Promise(resolve => {
		// https://stackoverflow.com/a/39840655/587407
		chrome.tabs.query({active: true, currentWindow: true}, ([current_tab]) => {
			resolve({
				...current_tab,
				url: new URL(current_tab.url),
				index: undefined, // because dangerous to use
			})
		})
	})
}

get_current_tab()
	.then(infos => {
		console.log('current tab=', infos)
	})


document.addEventListener('click', event => {
	try {
		const { target: clickedElement } = event
		if (!clickedElement || !clickedElement.id)
			return

		console.log('on click', clickedElement.id)
		switch(clickedElement.id) {
			case 'notify': {
				chrome.notifications.create(
					{
						"type": "basic",
						"iconUrl": chrome.extension.getURL("icons/auto-repair_64x64.png"),
						"title": "[Universal web debug tool] notification",
						"message": "[Universal web debug tool] notif from background"
					}
				)
				break
			}

			default:
				console.warn(`Unknown clickable id: "${clickedElement.id}!`)
				break
		}
	} catch (err) {
		console.error('on click', err)
	}
})

function do_sth() {
	chrome.tabs.query({active: true, currentWindow: true}, ([current_tab]) => {
		console.log('current tab')
	});
}