import React from 'react'
import { Stage } from 'react-konva'

import { ChartRoot } from './Chart.styles'
import { ChartProps } from './Chart.types'
import ChartZoom from './ChartZoom/ChartZoom'
import { ChartStoreContext } from './hooks/useChartStore'

const Chart: React.FC<ChartProps> = props => {
    const {
        width,
        height,
        innerWidth,
        innerHeight,
        marginLeft,
        marginBottom,
        marginTop,
        marginRight,
        children,
        xScale,
        onZoom,
    } = props

    const stageRef = React.useRef(null)

    const dimensions = React.useMemo(() => {
        return {
            bottom: marginBottom,
            innerHeight,
            innerWidth,
            left: marginLeft,
            right: marginRight,
            top: marginTop,
        }
    }, [marginTop, marginRight, marginBottom, marginLeft, innerHeight, innerWidth])

    const providerObject = React.useMemo(() => {
        return {
            dimensions,
            height,
            width,
        }
    }, [height, width, dimensions])

    const onZoomStart = (domain: number[]) => {
        onZoom(domain)
    }

    const onZoomingStart = (domain: number[]) => {
        onZoom(domain)
    }

    const onZoomEnd = (domain: number[]) => {
        onZoom(domain)
    }

    return (
        <ChartRoot
            height={height}
            width={width}
            title={'Test Chart'}
            marginLeft={marginLeft}
            marginRight={marginRight}
            marginTop={marginTop}
            marginBottom={marginBottom}>
            <Stage height={height} width={innerWidth} y={10} ref={stageRef}>
                <ChartStoreContext.Provider value={providerObject}>{children}</ChartStoreContext.Provider>
            </Stage>
            <ChartZoom
                height={innerHeight}
                width={innerWidth}
                xScale={xScale}
                domain={xScale.domain()}
                stageRef={stageRef}
                onZoomStart={onZoomStart}
                onZooming={onZoomingStart}
                onZoomEnd={onZoomEnd}
            />
        </ChartRoot>
    )
}

export default Chart
