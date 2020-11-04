import {
    timeDay,
    timeHour,
    timeMinute,
    timeMonth,
    timeSecond,
    timeWeek,
    timeYear,
} from 'd3-time'
import { timeFormat } from 'd3-time-format'
import format from 'date-fns/format'

const formatMillisecond = timeFormat('.%L')
const formatSecond = timeFormat(':%S')
const formatMinute = timeFormat('%H:%M')
const formatHour = timeFormat('%H:%M')
const formatDay = timeFormat('%a %d')
const formatWeek = timeFormat('%b %d')
const formatMonth = timeFormat('%B')
const formatYear = timeFormat('%Y')

export function multiTimeFormat(domainValue: Date): string {
    if (timeSecond(domainValue) < domainValue) {
        return formatMillisecond(domainValue)
    } else if (timeMinute(domainValue) < domainValue) {
        return formatSecond(domainValue)
    } else if (timeHour(domainValue) < domainValue) {
        return formatMinute(domainValue)
    } else if (timeDay(domainValue) < domainValue) {
        return formatHour(domainValue)
    } else if (timeMonth(domainValue) < domainValue) {
        if (timeWeek(domainValue) < domainValue) {
            return formatDay(domainValue)
        }

        return formatWeek(domainValue)
    } else if (timeYear(domainValue) < domainValue) {
        return formatMonth(domainValue)
    }

    return formatYear(domainValue)
}

export function dateTimeFormat(value: number | string) {
    return format(new Date(value), 'dd.MM.yyyy HH:mm:ss.SSS')
}

export function deltaDateTimeFormat(valueLeft: number, valueRight: number) {
    let delta = Math.abs(new Date(valueLeft).getTime() - new Date(valueRight).getTime())

    const years = Math.floor(delta / 31536000000)
    delta -= years * 31536000000

    const months = Math.floor(delta / 2592000000)
    delta -= months * 2592000000

    const days = Math.floor(delta / 86400000)
    delta -= days * 86400000

    const hours = Math.floor(delta / 3600000)
    delta -= hours * 3600000

    const minutes = Math.floor(delta / 60000)
    delta -= minutes * 60000

    const seconds = Math.floor(delta / 1000)
    delta -= seconds * 1000

    const milliseconds = Math.floor(delta)

    return `${years}y ${months}m ${days}d ${hours}h ${minutes}min ${seconds}s ${milliseconds}ms`
}

export function numberFormat(value: number | null | undefined, fractionDigits: number): string {
    if (typeof value === 'number') {
        return value.toFixed(fractionDigits)
    }

    return '--.--'
}
