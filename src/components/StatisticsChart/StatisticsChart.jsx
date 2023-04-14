import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'

const StatisticsChart = () => {

    const option = {
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                },

            }
        ],
        series: [
            {
                type: 'line',
                smooth: true,
                data: [20000, 10000, 25000, 34000, 65000, 45000, 70000]
            }
        ]

    }

    return (
        <ReactECharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            // onChartReady={this.onChartReadyCallback}
            onEvents={EventsDict}

        />
    )
}

export default StatisticsChart