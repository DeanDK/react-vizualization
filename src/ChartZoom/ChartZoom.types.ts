import { ScaleFunctionTypes } from '../ChartFactory.types'

export type Props = {
    /**
     *
     */
    height: number
    /**
     *
     */
    width: number
    /**
     *
     */
    xScale: ScaleFunctionTypes
    /**
     *
     */
    domain: number[] | Date[]
    /**
     *
     */
    stageRef?: any
    /**
     *
     */
    onZoomStart?: (domain: number[]) => void
    /**
     *
     */
    onZooming?: (domain: number[]) => void
    /**
     *
     */
    onZoomEnd?: (domain: number[]) => void
}
