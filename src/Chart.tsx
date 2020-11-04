import React from 'react';
import {KonvaNodeComponent, Stage} from 'react-konva'

import {ChartRoot} from "./Chart.styles";
import {ChartProps} from "./Chart.types";
import {ChartStoreContext} from "./hooks/useChartStore";
import {StageConfig} from "konva/types/Stage";
import ChartZoom from "./ChartZoom/ChartZoom";

const Chart: React.FC<ChartProps> = (props) => {
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
        onZoom
    } = props;

    // @ts-ignore
    const stageRef = React.useRef<MutableRefObject<KonvaNodeComponent<StageConfig, NodeConfig>>>(null)

    const dimensions = React.useMemo(() => {
        return {
            top: marginTop,
            bottom: marginBottom,
            left: marginLeft,
            right: marginRight,
            innerHeight,
            innerWidth
        }
    }, [marginTop, marginRight, marginBottom, marginLeft, innerHeight, innerWidth])

    const providerObject = React.useMemo(() => {
        return {
            height,
            width,
            dimensions
        }
    }, [height, width, dimensions])

    const onZoomStart = (domain: [number, number]) => {
        onZoom(domain)
    }

    const onZoomingStart = (domain: [number, number]) => {
        onZoom(domain)
    }

    const onZoomEnd = (domain: [number, number]) => {
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
            marginBottom={marginBottom}
        >
            <Stage
                height={height + 100}
                width={width + 100}
                y={10}
                ref={stageRef}
            >
                <ChartStoreContext.Provider
                    value={providerObject}
                >
                    {children}
                </ChartStoreContext.Provider>
            </Stage>
            <ChartZoom
                height={height}
                width={innerWidth}
                xScale={xScale}
                domain={xScale.domain() as any}
                stageRef={stageRef}
                onZoomStart={onZoomStart}
                onZooming={onZoomingStart}
                onZoomEnd={onZoomEnd}
            />
        </ChartRoot>
    )
}

export default Chart;