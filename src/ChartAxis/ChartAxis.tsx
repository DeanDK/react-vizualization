import React from 'react'
import { Line } from 'react-konva'

import { useChartStore } from '../hooks/useChartStore'

import { Props } from './ChartAxis.types'

const ChartAxis: React.FC<Props> = props => {
    const { orientation } = props

    const { dimensions } = useChartStore()

    const innerWidth = dimensions.innerWidth
    const innerHeight = dimensions.innerHeight

    const points = orientation === 'vertical' ? [0, 0, 0, innerHeight] : [0, innerHeight, innerWidth, innerHeight]

    return (
        <>
            <Line points={points} stroke="black" scaleX={1} />
        </>
    )
}

export default ChartAxis
