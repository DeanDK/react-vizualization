import {ScaleLinear, scaleLinear, ScaleContinuousNumeric, max} from "d3";

import {ScaleFunctionTypes} from "./ChartFactory.types";

export class ChartFactory {

    public static createLinearXScale(domain: [number, number], width: number): ScaleLinear<number, number> {
        return scaleLinear()
            .domain(domain)
            .rangeRound([0, width])
    }

    public static createLinearYScale(domain: [number, number], height: number): ScaleLinear<number, number> {
        return scaleLinear()
            .domain(domain)
            .rangeRound([height, 0])
    }

    public static getTickValues(scale: ScaleFunctionTypes) {
        return scale.ticks();
    }

    public static calculateDomainMaxValue(data: number[], fn: (d: any) => number): [number, number] {
        return [0, max(data, fn)]
    }
}