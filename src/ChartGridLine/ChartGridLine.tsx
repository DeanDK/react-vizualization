import React from 'react';
import {Group, Line, Text} from 'react-konva';

import {Props} from "./ChartGridLine.types";
import {useChartStore} from "../hooks/useChartStore";

const ChartGridLine: React.FC<Props> = (props) => {
    const {
        xScale,
        yScale,
        xAxisTimeFormat
    } = props;

    const {height, width} = useChartStore();

    const xAxisTickValues = xScale.ticks();
    const yAxisTickValues = yScale.ticks();

    return (
        <>
            {(xAxisTickValues as Date[]).map((tickValue, index) => (
                <Group transform={`translate(${xScale(tickValue)},0)`} key={index} x={50}>
                    <Line
                        points={[xScale(tickValue), 0, xScale(tickValue), height]}
                        stroke={'lightgrey'}
                    />
                    <Text
                        align='center'
                        x={xScale(tickValue)}
                        y={height}
                        text={xAxisTimeFormat(tickValue)}
                        fontSize={15}
                        padding={5}
                    />
                </Group>
            ))}
            {(yAxisTickValues as [number, number]).map((tickValue, index) => (
                <Group transform={`translate(0, ${yScale(tickValue)})`} key={index} x={50}>
                    <Line
                        points={[0, yScale(tickValue), width, yScale(tickValue)]}
                        stroke={'lightgrey'}
                    />
                    <Text
                        align='center'
                        y={yScale(tickValue)}
                        x={-40}
                        text={tickValue.toString()}
                        fontSize={15}
                        padding={10}
                    />
                </Group>
            ))}
        </>
    )
}

export default ChartGridLine;