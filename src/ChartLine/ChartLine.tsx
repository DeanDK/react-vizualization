import React from 'react';
import { Line } from 'react-konva';

import {Props} from "./ChartLine.types";
import {ChartFactory} from "../ChartFactory";

const ChartLine: React.FC<Props> = (props) => {
    const {
        data,
        xScale,
        yScale,
        xValue,
        yValue,
        stroke,
        lineCap,
    } = props;

    const xPoints = (d) => xScale(+xValue(d));
    const yPoints = (d) => yScale(+yValue(d));

    const points = ChartFactory.calculateXAndYCoordinates(data.map(xPoints), data.map(yPoints))

    return (
        <Line
            points={points}
            stroke={stroke}
            lineCap={lineCap}
            lineJoin={'bevel'}
            shadowColor={'red'}
            strokeWidth={1}
        />
    )
}

export default ChartLine;