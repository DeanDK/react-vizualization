import { ZoomBehavior as d3ZoomBehavior, zoom as d3Zoom, select as d3Select } from 'd3'
import React, { useEffect } from 'react'

import { Props } from './ChartZoom.types'

const ChartZoom: React.FC<Props> = props => {
    const { height, width, xScale, stageRef, onZooming } = props

    const zoom = React.useRef<d3ZoomBehavior<Element, unknown> | null>(null)

    const initZooming = React.useCallback(
        (error, domain: number[]) => {
            if (error) throw new Error('Error occurred while scrolling')

            onZooming(domain)
        },
        [onZooming],
    )

    const zoomEventProxy = React.useCallback(
        (event, callback: (error, domain: number[]) => void) => {
            const xScaleCopy = xScale.copy()
            const zoomDomain: number[] = event.transform.rescaleX(xScaleCopy).domain()

            const min = zoomDomain[0]
            const max = zoomDomain[1]

            callback(null, [Number(min), Number(max)])
        },
        [xScale],
    )

    useEffect(() => {
        zoom.current = d3Zoom()
            .extent([
                [0, 0],
                [width, height],
            ])
            .scaleExtent([1, Infinity])
            .translateExtent([
                [0, 0],
                [width, height],
            ])
            .on('start', event => zoomEventProxy(event, initZooming))
            .on('zoom', event => zoomEventProxy(event, initZooming))
            .on('end', event => zoomEventProxy(event, initZooming))

        d3Select(stageRef.current.content)
            .call(zoom.current)
            .on('mousedown.zoom', null)
            .on('wheel', event => onWheel(event))
    }, [height, initZooming, stageRef, width, zoomEventProxy])

    const onWheel = event => {
        const e = event as MouseEvent

        e.preventDefault()
    }

    return null
}

export default ChartZoom
