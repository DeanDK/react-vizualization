import React from 'react'
import { Line } from 'react-konva'

import { Props } from './ChartLine.types'

const ChartLine: React.FC<Props> = props => {
    const { data, xScale, yScale, stroke, lineCap } = props

    return (
        <Line
            perfectDrawEnabled={true}
            listening={false}
            points={data.map((dataItem, index) => {
                if (index % 2) {
                    return yScale(dataItem)
                }

                return xScale(dataItem)
            })}
            stroke={stroke}
            lineCap={lineCap}
            lineJoin={'bevel'}
            shadowColor={'red'}
            strokeWidth={1}
        />
    )
}

export default ChartLine
