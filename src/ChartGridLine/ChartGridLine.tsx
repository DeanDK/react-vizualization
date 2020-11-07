import React from 'react'
import { Group, Line } from 'react-konva'

import { useChartStore } from '../hooks/useChartStore'

import { Props } from './ChartGridLine.types'

const ChartGridLine: React.FC<Props> = props => {
    const { xScale, yScale, numberOfXAxisGridLines = 10, numberOfYAxisGridLines = 10 } = props

    const {
        dimensions: { innerHeight, innerWidth },
    } = useChartStore()

    const xAxisTickValues = xScale.ticks(numberOfXAxisGridLines)
    const yAxisTickValues = yScale.ticks(numberOfYAxisGridLines)

    return (
        <>
            {(xAxisTickValues as Date[]).map((tickValue, index) => (
                <Group key={index} x={xScale(tickValue)}>
                    <Line points={[0, 0, 0, innerHeight]} stroke={'grey'} strokeWidth={0.5} />
                    <Line points={[0, innerHeight, 0, innerHeight + 8]} stroke={'black'} />
                </Group>
            ))}
            {(yAxisTickValues as [number, number]).map((tickValue, index) => (
                <Group key={index} y={yScale(tickValue)}>
                    <Line points={[0, 0, innerWidth, 0]} stroke={'lightgrey'} strokeWidth={0.5} />
                    <Line points={[-30, 0, 0, 0]} stroke={'black'} strokeWidth={1} offsetX={50} />
                </Group>
            ))}
        </>
    )
}

export default ChartGridLine
