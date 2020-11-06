import React from 'react'

import { ScaleFunctionTypes } from './ChartFactory.types'

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
    axes?: React.ReactNode
    /**
     * Classes to be applied on root element
     *
     * @default ""
     */
    className?: string
    /**
     * React component which will render X and Y axis grid
     *
     * @default ""
     */
    gridlines?: React.ReactElement<unknown> | null
    /**
     * Defines chart height
     *
     * @default "0"
     */
    height?: number
    /**
     * Defines height of drawing area
     *
     * @default "0"
     */
    innerHeight?: number
    /**
     * Defines width of drawing area
     *
     * @default "0"
     */
    innerWidth?: number
    /**
     * Defines chart bottom offset
     *
     * @default "0"
     */
    marginBottom?: number
    /**
     * Defines chart left offset
     *
     * @default "0"
     */
    marginLeft?: number
    /**
     * Defines chart right offset
     *
     * @default "0"
     */
    marginRight?: number
    /**
     * Defines chart top offset
     *
     * @default "0"
     */
    marginTop?: number
    /**
     * Value used to display component title
     *
     * @default ""
     */
    title?: string
    /**
     * Defines chart width
     *
     * @default ""
     */
    width?: number
    /**
     * Component used for various interactions on chart like:
     * Selection, Zooming, Calculator, etc...
     *
     * @default ""
     */
    interactor?: React.ReactNode | React.ReactNodeArray
    /**
     * Component used for various interactions on chart like:
     * Selection, Zooming, Calculator, etc...
     *
     * @default ""
     */
    onZoom: (domain: number[]) => void
}
