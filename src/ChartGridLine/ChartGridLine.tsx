import React from 'react';
import {Group, Line, Text} from 'react-konva';

import {Props} from "./ChartGridLine.types";
import {ChartFactory} from "../ChartFactory";
import {useChartStore} from "../hooks/useChartStore";

const ChartGridLine: React.FC<Props> = (props) => {
    const {
        xScale,
        yScale,
    } = props;

    const {height, width} = useChartStore();

    const xAxisTickValues = ChartFactory.getTickValues(xScale)
    const yAxisTickValues = ChartFactory.getTickValues(yScale);

    return (
        <>
            {(xAxisTickValues as [number, number]).map((tickValue, index) => (
                <Group transform={`translate(${xScale(tickValue)},0)`} key={index} x={20}>
                    <Line
                        points={[xScale(tickValue), 0, xScale(tickValue), height]}
                        stroke={'lightgrey'}
                    />
                    <Text
                        align='center'
                        x={xScale(tickValue)}
                        y={height}
                        text={tickValue.toString()}
                        fontSize={15}
                        padding={5}
                    />
                </Group>
            ))}
            {(yAxisTickValues as [number, number]).map((tickValue, index) => (
                <Group transform={`translate(0, ${yScale(tickValue)})`} key={index} x={20}>
                    <Line
                        points={[0, yScale(tickValue), width, yScale(tickValue)]}
                        stroke={'lightgrey'}
                    />
                    <Text
                        align='center'
                        y={yScale(tickValue)}
                        x={-30}
                        text={tickValue.toString()}
                        fontSize={15}
                        padding={5}
                    />
                </Group>
            ))}
        </>
    )
}

export default ChartGridLine;