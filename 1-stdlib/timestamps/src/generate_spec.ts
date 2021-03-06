import { expect } from 'chai'

import {
	get_UTC_timestamp_ms,
	get_human_readable_UTC_timestamp_ms,
	get_human_readable_UTC_timestamp_seconds,
	get_human_readable_UTC_timestamp_minutes,
	get_human_readable_UTC_timestamp_days,
} from '.'

declare const console: any

describe('@offirmo-private/timestamps', function() {

	describe('get_UTC_timestamp_ms()', function() {

		it('should return correct UTC unix timestamps in ms', function() {
			for(let i = 0; i < 10; ++i) {
				const stamp = get_UTC_timestamp_ms()
				console.log(stamp)
				expect(stamp).to.be.a('number')
				expect(stamp).to.be.within(
					1510177449000, // 2017
					4665851049000, // 2117
				)
			}
		})
	})

	describe('get_human_readable_UTC_timestamp_ms()', function() {

		it('should return correct UTC timestamps up to the millisecond', function() {
			for(let i = 0; i < 10; ++i) {
				const stamp = get_human_readable_UTC_timestamp_ms()
				console.log(stamp)
				expect(stamp).to.be.a('string')
				expect(stamp.length).to.equal(21)
			}
		})
	})

	describe('get_human_readable_UTC_timestamp_seconds()', function() {

		it('should return correct UTC timestamps up to the second', function() {
			for(let i = 0; i < 10; ++i) {
				const stamp = get_human_readable_UTC_timestamp_seconds()
				console.log(stamp)
				expect(stamp).to.be.a('string')
				expect(stamp.length).to.equal(17)
			}
		})
	})

	describe('get_human_readable_UTC_timestamp_minutes()', function() {

		it('should return correct UTC timestamps up to the minute', function() {
			for(let i = 0; i < 10; ++i) {
				const stamp = get_human_readable_UTC_timestamp_minutes()
				console.log(stamp)
				expect(stamp).to.be.a('string')
				expect(stamp.length).to.equal(14)
			}
		})
	})

	describe('get_human_readable_UTC_timestamp_days()', function() {

		it('should return correct UTC timestamps up to the day', function() {
			for(let i = 0; i < 10; ++i) {
				const stamp = get_human_readable_UTC_timestamp_days()
				console.log(stamp)
				expect(stamp).to.be.a('string')
				expect(stamp.length).to.equal(8)
			}
		})
	})
})
