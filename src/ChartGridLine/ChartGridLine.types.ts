import { ScaleFunctionTypes } from '../ChartFactory.types'

export type Props = {
    /**
     * d3 xAxis scale function
     */
    xScale: ScaleFunctionTypes
    /**
     * d3 xAxis scale function
     */
    yScale: ScaleFunctionTypes
    /**
     * Number of x axis grid lines
     */
    numberOfXAxisGridLines?: number
    /**
     * Number of y axis grid lines
     */
    numberOfYAxisGridLines?: number
}
