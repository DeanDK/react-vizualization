import React, {useMemo} from 'react';
import {Stage} from 'react-konva'

import {ChartRoot} from "./Chart.styles";
import {ChartProps} from "./Chart.types";
import {ChartStoreContext} from "./hooks/useChartStore";

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
        children
    } = props;


    const dimensions = {
        top: marginTop,
        bottom: marginBottom,
        left: marginLeft,
        right: marginRight,
        innerHeight,
        innerWidth
    }

    const providerObject = useMemo(() => {
        return {
            height,
            width,
            dimensions
        }
    }, [height, width, dimensions])

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
            >
                <ChartStoreContext.Provider
                    value={providerObject}
                >
                    {children}
                </ChartStoreContext.Provider>
            </Stage>
        </ChartRoot>
    )
}

export default Chart;