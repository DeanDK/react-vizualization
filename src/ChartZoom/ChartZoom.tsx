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

    let zoom: d3ZoomBehavior<Element, unknown> | null = null
    let isZooming = false;

    useEffect(() => {
        initZoom();
    }, [xScale])


    const zoomEventProxy = (event, callback: (domain: [number, number]) => void) => {
        const xScaleCopy = xScale.copy();
        const zoomDomain: [number, number] = event.transform.rescaleX(xScaleCopy).domain();

        const min = zoomDomain[0]
        const max = zoomDomain[1]

        callback([min, max])
    }

    const onWheel = (event) => {
        const e = event as MouseEvent

        e.preventDefault()
    }

    const initZoomStart = (domain: [number, number]) => {
        isZooming = true;

        onZoomStart(domain)
    }

    const initZooming = (domain: [number, number]) => {
        onZooming(domain)
    }

    const initZoomEnd = (domain: [number, number]) => {
        isZooming = false;

        onZoomEnd(domain)
    }

    const initZoom = () => {
        zoom = d3Zoom()
            .extent([[0, 0], [width, height]])
            .scaleExtent([.5, Infinity])
            .translateExtent([[0, 0], [width, height]])
            .filter(() => true)
            .on('start', (event) => zoomEventProxy(event, initZoomStart))
            .on('zoom', (event) => zoomEventProxy(event, initZooming))
            .on('end', (event) => zoomEventProxy(event, initZoomEnd))

        d3Select(stageRef.current.content)
            .call(zoom)
            .on('wheel', (event) => onWheel(event))
    }

    return null;
}

export default ChartZoom;