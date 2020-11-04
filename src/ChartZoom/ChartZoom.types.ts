import {ScaleFunctionTypes} from "../ChartFactory.types";

export type Props = {
    /**
     *
     */
    height: number;
    /**
     *
     */
    width: number;
    /**
     *
     */
    xScale: ScaleFunctionTypes
    /**
     *
     */
    domain: [number, number]
    /**
     *
     */
    stageRef: any
    /**
     *
     */
    onZoomStart: (domain: [number, number]) => void
    /**
     *
     */
    onZooming: (domain: [number, number]) => void
    /**
     *
     */
    onZoomEnd: (domain: [number, number]) => void

}