import React, {useEffect} from 'react';
import {
    ZoomBehavior as d3ZoomBehavior,
    zoom as d3Zoom,
    select as d3Select,
} from 'd3';

import {Props} from "./ChartZoom.types";

const ChartZoom: React.FC<Props> = (props) => {
    const {
        height,
        width,
        xScale,
        stageRef,
        onZoomStart,
        onZooming,
        onZoomEnd
    } = props;

    let zoom = React.useRef<d3ZoomBehavior<Element, unknown> | null>(null)
    let isZooming = false;

    useEffect(() => {
        zoom.current = d3Zoom()
            .extent([[0, 0], [width, height]])
            .scaleExtent([.5, Infinity])
            .translateExtent([[0, 0], [width, height]])
            .filter(() => true)
            .on('start', (event) => zoomEventProxy(event, initZoomStart))
            .on('zoom', (event) => zoomEventProxy(event, initZooming))
            .on('end', (event) => zoomEventProxy(event, initZoomEnd))

        d3Select(stageRef.current.content)
            .call(zoom.current)
            .on('wheel', (event) => onWheel(event))
    })


    const zoomEventProxy = (event, callback: (domain: number[]) => void) => {
        const xScaleCopy = xScale.copy();
        const zoomDomain: number[] = event.transform.rescaleX(xScaleCopy).domain();

        const min = zoomDomain[0]
        const max = zoomDomain[1]

        callback([min, max])
    }

    const onWheel = (event) => {
        const e = event as MouseEvent

        e.preventDefault()
    }

    const initZoomStart = (domain: number[]) => {
        isZooming = true;

        onZoomStart(domain)
    }

    const initZooming = (domain: number[]) => {
        onZooming(domain)
    }

    const initZoomEnd = (domain: number[]) => {
        isZooming = false;

        onZoomEnd(domain)
    }

    return null;
}

export default ChartZoom;