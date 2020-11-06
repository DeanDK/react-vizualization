import Konva from 'konva'

import { ScaleFunctionTypes } from '../ChartFactory.types'

export type Props = Konva.ShapeConfig & {
    data: number[]
    /**
     *
     */
    dashed?: number[]
    /**
     *
     */
    scaleXId?: string
    /**
     *
     */
    scaleYId?: string
    /**
     *
     */
    stroke?: string
    /**
     *
     */
    strokeWidth?: number
    /**
     *
     */
    xScale: ScaleFunctionTypes
    /**
     *
     */
    yScale: ScaleFunctionTypes
    /**
     *
     */
    xValue: (d) => number | string
    /**
     *
     */
    yValue: (d) => number | string
}
