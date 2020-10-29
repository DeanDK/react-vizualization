import {
    ScaleLinear,
    ScaleTime,
    scaleLinear,
    scaleTime,
    timeFormat,
    extent,
    max,
    zip
} from "d3";

import {ChartDimensions, ChartSizing} from "./ChartFactory.types";

export class ChartFactory {

    public static createSizing(dimension: ChartDimensions): ChartSizing {
        const {
            height = 0,
            marginBottom = 0,
            marginLeft = 0,
            marginRight = 0,
            marginTop = 0,
            width = 0,
        } = dimension

        const innerHeight = Math.floor(height - marginTop - marginBottom)
        const innerWidth = Math.floor(width - marginLeft - marginRight)

        return {
            height: Math.max(0, height),
            innerHeight: Math.max(0, innerHeight),
            innerWidth: Math.max(0, innerWidth),
            marginBottom: Math.max(0, marginBottom),
            marginLeft: Math.max(0, marginLeft),
            marginRight: Math.max(0, marginRight),
            marginTop: Math.max(0, marginTop),
            width: Math.max(0, width),
        }
    }

    public static createLinearYScale(domain: [number, number], height: number): ScaleLinear<number, number> {
        return scaleLinear()
            .domain(domain)
            .rangeRound([height, 0])
            .nice()
            .clamp(true)
    }

    public static createTimeScale(domain: [number, number], width: number): ScaleTime<number, number> {
        return scaleTime()
            .domain(domain)
            .rangeRound([0, width])
            .nice()
            .clamp(true)
    }

    public static calculateDomainMaxValue(data: number[], fn: (d: any) => number): [number, number] {
        return [0, max(data, fn)]
    }

    public static extentData(data: number[], fn: (d: any) => number): [number, number] {
        return extent(data, fn);
    }

    public static calculateXAndYCoordinates(arr1: number[], arr2: number[]): number[] {
        return zip(arr1, arr2).flat();
    }

    public static formatTime(formatSpecification: string): (date: Date) => string {
        return timeFormat(formatSpecification);
    }

}