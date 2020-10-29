import {ScaleFunctionTypes} from "../ChartFactory.types";
import Konva from "konva";

export type Props = Konva.ShapeConfig & {
    /**
     *
     */
    dashed?: number[],
    /**
     *
     */
    data: number[],
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
