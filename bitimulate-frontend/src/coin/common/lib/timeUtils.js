import moment from 'moment-timezone'
import * as d3 from 'd3'

export const dateFormat = d3.timeParse('%Y-%m-%d %H:%M')

export const timestampToDatetime = (timeType, timeCount, timestamp) => {
    switch (timeType) {
        case 'minute':
        case 'minutes':
            return (
                moment(timestamp)
                    .minute(Math.floor(moment(timestamp).minute() / timeCount) * timeCount)
                    .second(0)
                    // .tz("Asia/Seoul")
                    .format('YYYY-MM-DD HH:mm')
            )
        case 'hour':
        case 'hours':
            return (
                moment(timestamp)
                    .hour(Math.floor(moment(timestamp).hour() / timeCount) * timeCount)
                    .minute(0)
                    .second(0)
                    // .tz("Asia/Seoul")
                    .format('YYYY-MM-DD HH:mm')
            )
        case 'day':
        case 'days':
            return moment(timestamp).hour(9).minute(0).second(0).format('YYYY-MM-DD HH:mm')
        case 'week':
        case 'weeks':
            return moment(timestamp).hour(0).minute(0).second(0).format('YYYY-MM-DD HH:mm')
        default:
            return undefined
    }
}
