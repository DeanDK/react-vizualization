import React from 'react';
import {Stage} from 'react-konva'

import {ChartRoot} from "./Chart.styles";
import {Props} from "./Chart.types";
import {ChartStoreContext} from "./hooks/useChartStore";

const Chart: React.FC<Props> = (props) => {
    const {
        width,
        height,
        margin,
        children
    } = props;

    return (
        <ChartRoot
            height={height}
            width={width}
            title={'Test Chart'}
            marginLeft={margin.left}
            marginRigth={margin.right}
            marginTop={margin.top}
            marginBottom={margin.bottom}
        >
            <Stage
                height={window.innerHeight}
                width={window.innerWidth}
                draggable={true}
            >
                <ChartStoreContext.Provider value={{height: height, width: width, margin}}>
                    {children}
                </ChartStoreContext.Provider>
            </Stage>
        </ChartRoot>
    )
}

export default Chart;