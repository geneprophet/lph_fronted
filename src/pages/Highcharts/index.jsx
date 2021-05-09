import React, { Component } from 'react';
import styles from './index.less';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartSankey from "highcharts/modules/sankey";
import request from "umi-request";
HighchartSankey(Highcharts);
export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        title: {
          text: '桑吉图',
        },
        series: [
          {
            type: 'sankey',
            name: 'Sankey demo series',
            keys: ['from', 'to', 'weight'],
            data: null,
          },
        ],
      },
      hoverData: null,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    //  请求数据
    const data = await request('/api/charts');
    console.log(data.result);
    // return(data)
    this.setState({
      chartOptions:{
        series: [
          {data : data.result}
        ]
      }
    });
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
    // console.log(this.state.chartOptions);
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        {/*<h3>Hovering over {hoverData}</h3>*/}
        {/*<button onClick={this.updateSeries.bind(this)}>Update Series</button>*/}
      </div>
    );
  }
}
