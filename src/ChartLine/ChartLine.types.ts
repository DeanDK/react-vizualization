import {ScaleFunctionTypes} from "../ChartFactory.types";

export type Props = {
    /**
     *
     */
    dashed?: number[],
    /**
     *
     */
    data: [number, number][],
    /**
     *
     */
    scaleXId?: string,
    /**
     *
     */
    scaleYId?: string,
    /**
     *
     */
    stroke?: string,
    /**
     *
     */
    strokeWidth?: number,
    /**
     *
     */
    xScale: ScaleFunctionTypes,
    /**
     *
     */
    yScale: ScaleFunctionTypes,
    /**
     *
     */
    xValue: (d) => number | string;
    /**
     *
     */
    yValue: (d) => number | string;
}
