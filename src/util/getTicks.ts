import { ScaleFunctionTypes } from '../ChartFactory.types'

export function getTicks(scaleType: ScaleFunctionTypes, numOfTicks: number) {
    const scale = scaleType.domain() as number[]

    const [min, max] = scale.map(domain => {
        return Number(domain)
    })

    const delta = (max - min) / (numOfTicks - 1)

    const ticks = [min]

    if (numOfTicks > 2) {
        for (let iterator = 0; iterator < numOfTicks - 2; iterator += 1) {
            ticks.push(ticks[ticks.length - 1] + delta)
        }
    }

    ticks.push(max)

    return ticks
}
