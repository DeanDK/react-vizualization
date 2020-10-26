import {ScaleLinear, ScaleTime, ScalePower} from "d3";

export type ScaleFunctionTypes =
    ScaleLinear<number, number> |
    ScaleTime<number, number> |
    ScalePower<number, number>