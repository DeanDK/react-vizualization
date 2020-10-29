import {ScaleFunctionTypes} from "../ChartFactory.types";

export type Props = {
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
    xAxisTimeFormat: (date: Date) => string
    /**
     *
     */
    xAxisTickLabelOffset?: number;
    /**
     *
     */
    yLabelTickLabelOffset?: number;
    /**
     *
     */
    xAxisGridLinesOffset?: number;
    /**
     *
     */
    yAxisGridLinesOffset?: number;
    /**
     *
     */
    numberOfXAxisTicks?: number;
    /**
     *
     */
    numberOfYAxisTicks?: number;
}