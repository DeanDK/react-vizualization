import React from 'react';

import {ChartLayer} from "./ChartLayer/ChartLayer";
import {ChartFactory} from "./ChartFactory";
import {useData} from "./hooks/useData";
import Chart from "./Chart";
import ChartAxis from "./ChartAxis/ChartAxis";
import ChartGridLine from "./ChartGridLine/ChartGridLine";

const App: React.FC<{}> = () => {
    const [chartSize, setChartSize] = React.useState({
        height: window.innerHeight - 100,
        width: window.innerWidth - 100,
    })

    const data = useData();
    const {height, width} = chartSize;
    const margin = {top: 20, bottom: 20, left: 20, right: 20};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    React.useEffect(() => {
        const fn = () => {
            setChartSize({
                height: window.innerHeight - 100,
                width: window.innerWidth - 100,
            })
        }
        window.addEventListener('resize', fn, false)

        return () => {
            window.removeEventListener('resize', fn)
        }
    }, [])

    if (!data) {
        return <pre>Loading...</pre>
    }

    const xValue = d => d.Population
    const yValue = d => d.CountryCode

    const domainX = ChartFactory.calculateDomainMaxValue(data, xValue);
    const domainY = ChartFactory.calculateDomainMaxValue(data, yValue)

    const xScale = ChartFactory.createLinearXScale(domainX, innerWidth)
    const yScale = ChartFactory.createLinearYScale(domainY, innerHeight)

    return (
        <Chart
            height={height}
            width={width}
            title={'Line Chart'}
            margin={margin}
        >
            <ChartLayer>
                <ChartGridLine xScale={xScale} yScale={yScale}/>
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
            </ChartLayer>
        </Chart>
    );
}

export default App;
