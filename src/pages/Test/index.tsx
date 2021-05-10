import React, { Component } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

export default class LineChart extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      // 为了避免不必要的更新，将所有图表配置选项保存起来
      chartOptions: {
        xAxis: {
          categories: ['A', 'B', 'C'],
        },
        series: [{ data: [1, 2, 3] }],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this),
              },
            },
          },
        },
      },
      hoverData: null,
    };
  }
  // @ts-ignore
  setHoverData = (e) => {
    // 图表没有更新，因为 'chartOptions' 没有改变
    this.setState({ hoverData: e.target.category });
  };

  updateSeries = () => {
    // 图表只使用新配置选项进行更新
    this.setState({
      chartOptions: {
        series: [{ data: [Math.random() * 5, 2, 1] }],
      },
    });
  };

  render() {
    // @ts-ignore
    const { chartOptions, hoverData } = this.state;
    console.log(chartOptions);
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        <h3>Hovering over {hoverData}</h3>
        <button onClick={this.updateSeries.bind(this)}>Update Series</button>
      </div>
    );
  }
}
