import React from 'react';
import {Line, Text} from "react-konva";

import {Props} from "./ChartAxis.types";
import {useChartStore} from "../hooks/useChartStore";

export const ChartAxis: React.FC<Props> = (props) => {
    const {
        orientation,
        labelOffset = 40,
        labelText,
        labelFontSize = 25
    } = props;

    const {height, width} = useChartStore();

    const points = orientation === 'vertical' ? [0, 0, 0, height] : [0, height, width, height];

    const getLabelOrientation = (orientation: 'vertical' | 'horizontal') => {
        if (orientation === 'horizontal') {
            return (
                <Text
                    x={width / 2}
                    y={height + labelOffset}
                    text={labelText}
                    fontSize={20}
                />
            )
        }

        return (
            <Text
                x={0 - labelOffset}
                y={height / 2}
                text={labelText}
                fontSize={20}
            />
        )
    }

    return (
        <>
            <Line
                x={50}
                points={points}
                stroke="black"
                scaleX={1}
            />
            {getLabelOrientation(orientation)}
        </>
    )
}

export default ChartAxis;