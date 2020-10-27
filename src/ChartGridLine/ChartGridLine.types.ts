import {ScaleFunctionTypes} from "../ChartFactory.types";

export type Props = {
    xScale: ScaleFunctionTypes
    yScale: ScaleFunctionTypes
    xAxisTimeFormat: (date: Date) => string
}