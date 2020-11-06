import Konva from 'konva'

import { ScaleFunctionTypes } from '../ChartFactory.types'

export type Props = Konva.ShapeConfig & {
    /**
     * Data used to render chart line
     */
    data: number[]
    /**
     *  Line stroke
     */
    stroke?: string
    /**
     * Line stroke width
     */
    strokeWidth?: number
    /**
     * d3 xAxis scale function
     */
    xScale: ScaleFunctionTypes
    /**
     *  d3 yAxis scale function
     */
    yScale: ScaleFunctionTypes
}
