import React from 'react';
import {Line, Text} from "react-konva";

import {Props} from "./ChartAxis.types";
import {useChartStore} from "../hooks/useChartStore";

export const ChartAxis: React.FC<Props> = (props) => {
    const {
        orientation,
    } = props;

    const {height, width} = useChartStore();

    const points = orientation === 'vertical' ? [0, 0, 0, height] : [0, height, width, height];

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