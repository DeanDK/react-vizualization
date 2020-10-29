import React from 'react';

import {useData} from "./hooks/useData";
import {ChartFactory} from "./ChartFactory";
import Chart from "./Chart";
import {ChartLayer} from "./ChartLayer/ChartLayer";
import ChartGridLine from "./ChartGridLine/ChartGridLine";
import ChartAxis from "./ChartAxis/ChartAxis";
import ChartLine from "./ChartLine/ChartLine";

export default {
    title: 'Charts',
    components: Chart
}

const ChartStory = (props): JSX.Element => {
    const {
        ...args
    } = props

    const data = useData();

    const dimension = {
        height: args.height,
        width: args.width,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    }

    const {
        height,
        width,
        marginLeft,
        marginRight,
        marginBottom,
        marginTop,
        innerHeight,
        innerWidth
    } = ChartFactory.createSizing(dimension)

    if (!data) {
        return <pre>Loading...</pre>
    }

    const xValue = d => d.timestamp
    const yValue = d => d.temperature

    const domainX = ChartFactory.extentData(data, xValue);
    const domainY = ChartFactory.extentData(data, yValue);

    const xScale = ChartFactory.createTimeScale(domainX, innerWidth)
    const yScale = ChartFactory.createLinearYScale(domainY, innerHeight)

    const xAxisTimeFormat = ChartFactory.formatTime('%a');

    return (
        <Chart
            height={height}
            width={width}
            innerHeight={innerHeight}
            innerWidth={innerWidth}
            title={'Line Chart'}
            marginLeft={marginLeft}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginTop={marginTop}
            {...args}
        >
            <ChartLayer>
                <ChartGridLine
                    xScale={xScale}
                    yScale={yScale}
                    xAxisTimeFormat={xAxisTimeFormat}
                    numberOfXAxisTicks={args.numberOfXAxisTicks}
                    numberOfYAxisTicks={args.numberOfYAxisTicks}
                    {...args}
                />
                <ChartAxis
                    orientation={'vertical'}
                    xScale={xScale}
                    yScale={yScale}
                />
                <ChartAxis
                    orientation={'horizontal'}
                    xScale={xScale}
                    yScale={yScale}
                />
                <ChartLine
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}
                    stroke={'black'}
                    lineCap={'round'}
                    lineJoin={'round'}
                    {...args}
                />
            </ChartLayer>
        </Chart>
    );
}

const Template = args => <ChartStory {...args} />

export const LineChart = Template.bind({});

LineChart.args = {
    height: 300,
    width: 800,
    numberOfXAxisTicks: 11,
    numberOfYAxisTicks: 11
}

LineChart.argTypes = {
    stroke: {control: 'color'}
}


