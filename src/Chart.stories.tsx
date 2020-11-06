import React from 'react'

import Chart from './Chart'
import ChartAxis from './ChartAxis/ChartAxis'
import { ChartFactory } from './ChartFactory'
import ChartGridLine from './ChartGridLine/ChartGridLine'
import { ChartLayer } from './ChartLayer/ChartLayer'
import ChartLine from './ChartLine/ChartLine'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('../.storybook/assets/data.json')

export default {
    components: Chart,
    title: 'Charts',
}

const ChartStory = (props): JSX.Element => {
    const { ...args } = props

    const {
        height,
        width,
        marginLeft,
        marginRight,
        marginBottom,
        marginTop,
        innerHeight,
        innerWidth,
    } = ChartFactory.createSizing({
        height: args.height,
        marginBottom: args.marginBottom,
        marginLeft: args.marginLeft,
        marginRight: args.marginRight,
        marginTop: args.marginTop,
        width: args.width,
    })

    const dataXValues = Object.keys(data).map(key => new Date(key).getTime()) as number[]
    const dataYValues = Object.values(data).flat() as number[]

    const newData = ChartFactory.calculateXAndYCoordinates(dataXValues, dataYValues)

    const domainX = ChartFactory.extentData(dataXValues, d => d)
    const domainY = ChartFactory.extentData(dataYValues, d => d)

    const [newXDomain, setNewXDomain] = React.useState<number[]>(domainX)

    const xScale = ChartFactory.createTimeScale(newXDomain, innerWidth)
    const yScale = ChartFactory.createLinearYScale(domainY, innerHeight)

    const xAxisTimeFormat = ChartFactory.formatTime('%a')

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
            {...args}>
            <ChartLayer>
                <ChartGridLine
                    xScale={xScale}
                    yScale={yScale}
                    numberOfTicks={args.numberOfTicks}
                    xAxisTimeFormat={xAxisTimeFormat}
                    {...args}
                />
                <ChartAxis orientation={'vertical'} xScale={xScale} yScale={yScale} />
                <ChartAxis orientation={'horizontal'} xScale={xScale} yScale={yScale} />
                <ChartLine
                    data={newData}
                    xScale={xScale}
                    yScale={yScale}
                    stroke={'black'}
                    lineCap={'round'}
                    lineJoin={'round'}
                    {...args}
                />
            </ChartLayer>
        </Chart>
    )
}

const Template = args => <ChartStory {...args} />

export const LineChart = Template.bind({})

LineChart.args = {
    height: 300,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 40,
    marginTop: 30,
    numberOfTicks: 11,
    width: 800,
}

LineChart.argTypes = {
    stroke: { control: 'color' },
}
