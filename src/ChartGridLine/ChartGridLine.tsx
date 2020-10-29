import React from 'react';
import {Group, Line, Text} from 'react-konva';

import {Props} from "./ChartGridLine.types";
import {useChartStore} from "../hooks/useChartStore";

const ChartGridLine: React.FC<Props> = (props) => {
    const {
        xScale,
        yScale,
        xAxisTimeFormat,
        xAxisTickLabelOffset = 15,
        yLabelTickLabelOffset = 40,
        numberOfXAxisTicks,
        numberOfYAxisTicks
    } = props;

    const {height, dimensions: {innerHeight, innerWidth}} = useChartStore();

    const xAxisTickValues = xScale.ticks(numberOfXAxisTicks);
    const yAxisTickValues = yScale.ticks(numberOfYAxisTicks);

    return (
        <>
            {(xAxisTickValues as Date[]).map((tickValue, index) => (
                <Group
                    key={index}
                    x={xScale(tickValue)}
                    y={0}
                    offsetX={-50}
                >
                    <Line
                        points={[0, 0, 0, innerHeight]}
                        stroke={'lightgrey'}
                    />
                    <Text
                        align='center'
                        x={-xAxisTickLabelOffset}
                        y={height}
                        text={xAxisTimeFormat(tickValue)}
                        fontSize={15}
                        padding={0}
                    />
                </Group>
            ))}
            {(yAxisTickValues as [number, number]).map((tickValue, index) => (
                <Group
                    key={index}
                    x={0}
                    y={yScale(tickValue)}
                    offsetX={-50}
                >
                    <Line
                        points={[0, 0, innerWidth, 0]}
                        stroke={'lightgrey'}
                    />
                    <Text
                        align='center'
                        y={-10}
                        x={-yLabelTickLabelOffset}
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