import React from 'react';
import {Line} from "react-konva";

import {Props} from "./ChartAxis.types";
import {useChartStore} from "../hooks/useChartStore";

export const ChartAxis: React.FC<Props> = (props) => {
    const {
        orientation,
    } = props;

    const {height, width, margin} = useChartStore();

    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const points = orientation === 'vertical' ? [0, 0, 0, innerHeight] : [0, innerHeight, innerWidth, innerHeight];

    return (
        <>
            <Line
                x={50}
                points={points}
                stroke="black"
                scaleX={1}
            />
        </>
    )
}

export default ChartAxis;