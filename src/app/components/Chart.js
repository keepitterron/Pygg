import * as React from 'react';
import Loader from './Loader';
import PriceTooltip from './PriceTooltip';
import * as LineChart from 'react-svg-line-chart'

import Api from '../services/api';
import { dataToChart } from '../services/chart';
import { requestDelay } from '../services/delay';

const api = new Api();

export default class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      chart: {},
      tooltip: null,
      loading: true,
    };

    this.showChart = this.showChart.bind(this);
    this.handlePointHover = this.handlePointHover.bind(this);
  }

  componentDidMount() {
    const {coin} = this.props;
    const delay = requestDelay();
    const fn = () => api.charts(coin).then(dataToChart).then(this.showChart);

    setTimeout(fn, delay);
  }

  handlePointHover(e) {
    this.setState({tooltip: e});
  }

  showChart(chart) {
    this.setState({ chart, loading: false });
  }

  render() {
    if(this.loading || !this.state.chart.data) return <Loader />
    return <div>
      <LineChart
        data={this.state.chart.data}
        pointsOnHover={this.handlePointHover}
        {...this.state.chart.props}
      />
      <PriceTooltip tooltip={this.state.tooltip} />
    </div>;
  }
}
