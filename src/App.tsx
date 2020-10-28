import React from 'react';

import {ChartLayer} from "./ChartLayer/ChartLayer";
import {ChartFactory} from "./ChartFactory";
import {useData} from "./hooks/useData";
import Chart from "./Chart";
import ChartAxis from "./ChartAxis/ChartAxis";
import ChartGridLine from "./ChartGridLine/ChartGridLine";
import ChartLine from './ChartLine/ChartLine';

const App: React.FC<{}> = () => {
    const [chartSize] = React.useState({
        h: 500,
        w: 1000,
    })

    const data = useData();
    const {h, w} = chartSize;
    const dimension = {
        height: h,
        width: w,
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
            title={'Line Chart'}
            marginLeft={marginLeft}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginTop={marginTop}
        >
            <ChartLayer>
                <ChartGridLine
                    xScale={xScale}
                    yScale={yScale}
                    xAxisTimeFormat={xAxisTimeFormat}
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
                />
            </ChartLayer>
        </Chart>
    );
}

export default App;
