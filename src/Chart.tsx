import React from 'react';
import {Stage} from 'react-konva'

import {ChartRoot} from "./Chart.styles";
import {ChartProps} from "./Chart.types";
import {ChartStoreContext} from "./hooks/useChartStore";

const Chart: React.FC<ChartProps> = (props) => {
    const {
        width,
        height,
        marginLeft,
        marginBottom,
        marginTop,
        marginRight,
        children
    } = props;



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
                draggable={true}
                y={10}
            >
                <ChartStoreContext.Provider
                    value={{height: height, width: width}}
                >
                    {children}
                </ChartStoreContext.Provider>
            </Stage>
        </ChartRoot>
    )
}

export default Chart;