import React, { Component, useEffect, useState } from 'react';
import styles from './index.less';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartSankey from 'highcharts/modules/sankey';
import request from 'umi-request';
HighchartSankey(Highcharts);

const Index = ({
  match: {
    params: { chart },
  },
}) => {
  const [state, setState] = useState({
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
  });
  useEffect(async () => {
    console.log(chart);
    //  请求数据
    const data = await request('/api/charts');
    // console.log(data.result);
    setState({
      chartOptions: {
        series: [{ data: data.result }],
      },
    });
  }, [chart]);
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={state.chartOptions} />
    </div>
  );
};

export default Index;
