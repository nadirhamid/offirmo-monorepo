import {
	LogPayload,
	LogSink,
} from '@offirmo/practical-logger-types'

import {
	LEVEL_TO_CONSOLE_METHOD,
	to_uniform_level,
} from '../common'
import {
	FONT_FAMILY_BETTER_PROPORTIONAL,
	FONT_FAMILY_BETTER_MONOSPACE,
	LEVEL_TO_COLOR_STYLE,
	add_styled_string,
} from './common'

function has_details_indicator(console_method_name: string): boolean {
	return console_method_name === 'error' || console_method_name === 'warn'
}

const HEADER_FONT_SIZE_STYLE = 'font-size: 8px'
const MESSAGE_FONT_SIZE_STYLE = 'font-size: 11px'

export const sink: LogSink = (payload: LogPayload): void => {
	const { level, name, msg, err, details } = payload
	const console_method_name: string = LEVEL_TO_CONSOLE_METHOD[level]
	const console_method: Console['log'] = (console as any)[console_method_name]

	let line = ['']

	if (!has_details_indicator(console_method_name)) {
		line = add_styled_string(line, '▷', LEVEL_TO_COLOR_STYLE[level], 'font-size: 8px', FONT_FAMILY_BETTER_PROPORTIONAL, 'margin-left: .1em', 'margin-right: .2em')
	}
	line = add_styled_string(line, '[', LEVEL_TO_COLOR_STYLE[level], HEADER_FONT_SIZE_STYLE, FONT_FAMILY_BETTER_PROPORTIONAL)
	line = add_styled_string(line, to_uniform_level(level), LEVEL_TO_COLOR_STYLE[level], HEADER_FONT_SIZE_STYLE, FONT_FAMILY_BETTER_MONOSPACE)
	line = add_styled_string(line, '] ', LEVEL_TO_COLOR_STYLE[level], HEADER_FONT_SIZE_STYLE, FONT_FAMILY_BETTER_PROPORTIONAL)
	line = add_styled_string(line, '', 'font-size: unset')

	if (name) {
		line = add_styled_string(line, `${name} › `, LEVEL_TO_COLOR_STYLE[level], FONT_FAMILY_BETTER_PROPORTIONAL, MESSAGE_FONT_SIZE_STYLE)
	}
	line = add_styled_string(line, msg, LEVEL_TO_COLOR_STYLE[level], FONT_FAMILY_BETTER_PROPORTIONAL, MESSAGE_FONT_SIZE_STYLE)

	const args: any[] = line
	if (Object.keys(details).length)
		args.push(details)
	// err should be last because it takes a lot of room and "hides" further args
	if (err)
		args.push(err)

	console_method(...args)
}

export default sink