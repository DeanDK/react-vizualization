import {ScaleLinear, ScaleTime, ScalePower} from "d3";

import { ChartProps } from './Chart.types'

export type ScaleFunctionTypes =
    ScaleLinear<number, number> |
    ScaleTime<number, number>


export type ChartDimensions = Pick<ChartProps,
    | 'height'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginTop'
    | 'width'>

export type ChartSizing =
    Required<ChartDimensions> &
    {
        innerHeight: number,
        innerWidth: number,
    }
