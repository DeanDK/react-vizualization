import Konva from 'konva'

import { ScaleFunctionTypes } from '../ChartFactory.types'

export type Props = Konva.ShapeConfig & {
    /**
     * Represents x or y axis
     *
     * @default
     */
    orientation: 'vertical' | 'horizontal'
    /**
     * Chart axis tension
     *
     * @default 0
     */
    tension?: number
    /**
     * Represents line shape, open or closed
     *
     * @default false
     */
    closed?: boolean
    /**
     * Determines if line is bezier
     *
     * @default false
     */
    bezier?: boolean
    /**
     *  d3 xAxis scale function
     *
     * @default
     */
    xScale: ScaleFunctionTypes
    /**
     * d3 yAxis scale function
     *
     * @default 0
     */
    yScale: ScaleFunctionTypes
}
