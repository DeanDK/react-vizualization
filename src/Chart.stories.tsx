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

    const {
        height,
        width,
        marginLeft,
        marginRight,
        marginBottom,
        marginTop,
        innerHeight,
        innerWidth
    } = ChartFactory.createSizing({
        height: args.height,
        width: args.width,
        marginLeft: args.marginLeft,
        marginRight: args.marginRight,
        marginTop: args.marginTop,
        marginBottom: args.marginBottom,
    })

    const data = useData()

    const xValue = d => d.timestamp
    const yValue = d => d.temperature

    const domainX = ChartFactory.extentData(data, xValue);

    const domainY = React.useMemo(() => {
        return ChartFactory.extentData(data, yValue)
    }, [data])

    const [newXDomain, setNewXDomain] = React.useState<[number, number] | null>(null);

    const xScale = ChartFactory.createTimeScale(newXDomain ? newXDomain : domainX, innerWidth)

    const yScale = React.useMemo(() => {
        return ChartFactory.createLinearYScale(domainY, innerHeight)
    }, [domainY, innerHeight])

    const xAxisTimeFormat = ChartFactory.formatTime('%a');

    const onZoom = (domain: [number, number]) => {
        setNewXDomain(domain)
    }

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
            xScale={xScale}
            onZoom={onZoom}
            {...args}
        >
            <ChartLayer>
                <ChartGridLine
                    xScale={xScale}
                    yScale={yScale}
                    numberOfTicks={args.numberOfTicks}
                    xAxisTimeFormat={xAxisTimeFormat}
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
    marginLeft: 10,
    marginRight: 40,
    marginTop: 30,
    marginBottom: 10,
    numberOfTicks: 11
}

LineChart.argTypes = {
    stroke: {control: 'color'}
}


