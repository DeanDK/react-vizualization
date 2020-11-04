import React from 'react'
import {
    ScaleOrdinal,
    ScaleLinear,
    ScaleLogarithmic,
    ScalePower,
    ScaleTime,
    ScaleQuantile,
    ScaleQuantize,
    ScaleThreshold,
    ScalePoint,
    ScaleBand,
    ScaleSymLog,
} from 'd3-scale';
import {ScaleFunctionTypes} from "./ChartFactory.types";

/**
 * [Y, X]
 *
 * @default ""
 */
export type DataShape = [number, number]

export type ChartShallowDataShape<T = any> = {
    /**
     * Series visualization component color
     *
     * @default ""
     */
    color: string,
    /**
     * Y and X coordinates for visualization component
     *
     * @default ""
     */
    data: DataShape[],
    /**
     * Unique identifier for current data type
     *
     * @default ""
     */
    key: string,
    /**
     * Alias for current data shape item
     *
     * @default ""
     */
    label?: string,
    /**
     * Additional metadata to pass
     *
     * @default ""
     */
    metadata?: T,
}

export type ChartDataShape<T = any> = ChartShallowDataShape<T>[]

export type ChartProps = {
    /**
     *
     *
     */
    xScale: ScaleFunctionTypes
    /**
     * React components used to render X and Y Axes
     *
     */
    axes?: React.ReactNode,
    /**
     * Classes to be applied on root element
     *
     * @default ""
     */
    className?: string,
    /**
     * React component which will render X and Y axis grid
     *
     * @default ""
     */
    gridlines?: React.ReactElement<unknown> | null,
    /**
     * Defines chart height
     *
     * @default "0"
     */
    height?: number,
    /**
     * Defines height of drawing area
     *
     * @default "0"
     */
    innerHeight?: number,
    /**
     * Defines width of drawing area
     *
     * @default "0"
     */
    innerWidth?: number,
    /**
     * Defines chart bottom offset
     *
     * @default "0"
     */
    marginBottom?: number,
    /**
     * Defines chart left offset
     *
     * @default "0"
     */
    marginLeft?: number,
    /**
     * Defines chart right offset
     *
     * @default "0"
     */
    marginRight?: number,
    /**
     * Defines chart top offset
     *
     * @default "0"
     */
    marginTop?: number,
    /**
     * Value used to display component title
     *
     * @default ""
     */
    title?: string,
    /**
     * Defines chart width
     *
     * @default ""
     */
    width?: number,
    /**
     * Component used for various interactions on chart like:
     * Selection, Zooming, Calculator, etc...
     *
     * @default ""
     */
    interactor?: React.ReactNode | React.ReactNodeArray,
    /**
     * Component used for various interactions on chart like:
     * Selection, Zooming, Calculator, etc...
     *
     * @default ""
     */
    onZoom: (domain: number[]) => void;
}

/** A value that has .valueOf() function */
export type NumberLike = { valueOf(): number };

/** A value that has .toString() function */
export type StringLike = { toString(): string };

/** Default output type */
export type DefaultOutput = number | string | boolean | null;

/** Union types of all values from a map type */
export type ValueOf<T> = T[keyof T];

/** Extract generic type from array */
export type Unarray<T> = T extends Array<infer U> ? U : T;


export type DefaultThresholdInput = number | string | Date;

/**
 * Map scale type to D3Scale type
 * @type `Output`: Output type of all scales except point and band
 * @type `ThresholdInput`: Input type for threshold scale
 * @type `DiscreteInput`: Input type for ordinal, point and band scales
 */
export interface ScaleTypeToD3Scale<Output = DefaultOutput,
    DiscreteInput extends StringLike = StringLike,
    ThresholdInput extends DefaultThresholdInput = DefaultThresholdInput> {
    // Input of these continuous scales are `number | { valueOf(): number }`
    // and cannot be customized via generic type.
    linear: ScaleLinear<Output, Output>;
    log: ScaleLogarithmic<Output, Output>;
    pow: ScalePower<Output, Output>;
    sqrt: ScalePower<Output, Output>;
    symlog: ScaleSymLog<Output, Output>;
    // Input of time scales are `Date | number | { valueOf(): number }`
    // and cannot be customized via generic type.
    time: ScaleTime<Output, Output>;
    utc: ScaleTime<Output, Output>;
    // Input of these discretizing scales are `number | { valueOf(): number }`
    // and cannot be customized via generic type.
    quantile: ScaleQuantile<Output>;
    quantize: ScaleQuantize<Output>;
    // Threshold scale has its own Input generic type.
    threshold: ScaleThreshold<ThresholdInput, Output>;
    // Ordinal scale can customize both Input and Output types.
    ordinal: ScaleOrdinal<DiscreteInput, Output>;
    // Output of these two scales are always number while Input can be customized.
    point: ScalePoint<DiscreteInput>;
    band: ScaleBand<DiscreteInput>;
}

export type PickD3Scale<T extends keyof ScaleTypeToD3Scale<Output, DiscreteInput, DefaultThresholdInput>,
    Output = DefaultOutput,
    DiscreteInput extends StringLike = StringLike,
    ThresholdInput extends DefaultThresholdInput = DefaultThresholdInput> = ValueOf<Pick<ScaleTypeToD3Scale<Output, DiscreteInput, ThresholdInput>, T>>;

export type D3Scale<Output = DefaultOutput,
    DiscreteInput extends StringLike = StringLike,
    ThresholdInput extends DefaultThresholdInput = DefaultThresholdInput> = ValueOf<ScaleTypeToD3Scale<Output, DiscreteInput, ThresholdInput>>;

/**
 * A catch-all type for all D3 scales.
 *
 * Use this instead of `D3Scale`
 * unless other generic types (`Output`, `DiscreteInput` and `ThresholdInput`)
 * are also included and passed to `D3Scale`.
 * Otherwise it may not match some scales (band, point, threshold) correctly and cause TS errors.
 *
 * Example error messages:
 * * "Type 'StringLike' is not assignable to type 'string'"
 * * "Type 'number' is not assignable to type 'DefaultThresholdInput'"
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyD3Scale = D3Scale<any, any, any>;


export type ScaleInput<Scale extends AnyD3Scale> = Parameters<Scale>[0];
