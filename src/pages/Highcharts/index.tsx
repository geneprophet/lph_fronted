import React, { Component } from 'react';
import styles from './index.less';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
// import Highcharts from 'highcharts';
import Highcharts from 'highcharts/modules/sankey';
// window.Highcharts = Highcharts;
export default class Chart extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        title: {
          text: '桑吉图',
        },
        series: [
          {
            keys: ['from', 'to', 'weight'],
            data: [
              ['巴西', '葡萄牙', 5],
              ['巴西', '法国', 1],
              ['巴西', '西班牙', 1],
              ['巴西', '英国', 1],
              ['加拿大', '葡萄牙', 1],
              ['加拿大', '法国', 5],
              ['加拿大', '英国', 1],
              ['墨西哥', '葡萄牙', 1],
              ['墨西哥', '法国', 1],
              ['墨西哥', '西班牙', 5],
              ['墨西哥', '英国', 1],
              ['美国', '葡萄牙', 1],
              ['美国', '法国', 1],
              ['美国', '西班牙', 1],
              ['美国', '英国', 5],
              ['葡萄牙', '安哥拉', 2],
              ['葡萄牙', '塞内加尔', 1],
              ['葡萄牙', '摩洛哥', 1],
              ['葡萄牙', '南非', 3],
              ['法国', '安哥拉', 1],
              ['法国', '塞内加尔', 3],
              ['法国', '马里', 3],
              ['法国', '摩洛哥', 3],
              ['法国', '南非', 1],
              ['西班牙', '塞内加尔', 1],
              ['西班牙', '摩洛哥', 3],
              ['西班牙', '南非', 1],
              ['英国', '安哥拉', 1],
              ['英国', '塞内加尔', 1],
              ['英国', '摩洛哥', 2],
              ['英国', '南非', 7],
              ['南非', '中国', 5],
              ['南非', '印度', 1],
              ['南非', '日本', 3],
              ['安哥拉', '中国', 5],
              ['安哥拉', '印度', 1],
              ['安哥拉', '日本', 3],
              ['塞内加尔', '中国', 5],
              ['塞内加尔', '印度', 1],
              ['塞内加尔', '日本', 3],
              ['马里', '中国', 5],
              ['马里', '印度', 1],
              ['马里', '日本', 3],
              ['摩洛哥', '中国', 5],
              ['摩洛哥', '印度', 1],
              ['摩洛哥', '日本', 3],
            ],
            type: 'sankey',
            name: 'Sankey demo series',
          },
        ],
      },
      hoverData: null,
    };
  }

  // setHoverData = (e) => {
  //   // The chart is not updated because `chartOptions` has not changed.
  //   this.setState({ hoverData: e.target.category })
  // }

  // updateSeries = () => {
  //   // The chart is updated only with new options.
  //   this.setState({
  //     chartOptions: {
  //       series: [
  //         { data: [Math.random() * 5, 2, 1]}
  //       ]
  //     }
  //   });
  // }

  render() {
    const chartOptions = this.state.chartOptions;
    // console.log(this.state)
    console.log(this.state.chartOptions);
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        {/*<h3>Hovering over {hoverData}</h3>*/}
        {/*<button onClick={this.updateSeries.bind(this)}>Update Series</button>*/}
      </div>
    );
  }
}
