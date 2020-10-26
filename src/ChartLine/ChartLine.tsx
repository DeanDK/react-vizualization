import React from 'react';
import { Line } from 'react-konva';

import {Props} from "./ChartLine.types";
import {ChartFactory} from "../ChartFactory";
import {createXAndYCoordinates} from "../utils/createXAndYCoordinates";

const ChartLine: React.FC<Props> = (props) => {
    const {
        data,
        xScale,
        yScale,
        xValue,
        yValue
    } = props;

    const xPoints = (d) => xScale(+xValue(d));
    const yPoints = (d) => yScale(+yValue(d));

    const points = createXAndYCoordinates(data.map(xPoints), data.map(yPoints))

    return (
        <Line
            points={points}
            stroke={'black'}
        />
    )
}

export default ChartLine;