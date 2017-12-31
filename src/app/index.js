import * as React from 'react';

import Portfolio from './components/Portfolio';
import Loader from './components/Loader';
import { coinDataAggregate, portfolioMapper } from './services/coin';
import Api from './services/api';
import Storage from './services/storage';

const api = new Api();
const storage = new Storage();

function list(coinsInPortfolio) {
  return api.list().then((coins) => coins.filter((coin) => coinsInPortfolio.indexOf(coin.Name) > -1))
}

function coinAggregation() {
  const portfolio = storage.fetch('portfolio');
  if(!portfolio) return Promise.resolve([]);
  const coinsInPortfolio = portfolio.map((coin) => coin.name);
  const coinList = list(coinsInPortfolio);
  const prices = api.prices(coinsInPortfolio);
  const mappedPortfolio = portfolioMapper(portfolio);

  return Promise.all([coinList, prices, mappedPortfolio]).then(coinDataAggregate);
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      coins: [],
      loading: true,
    };

    this.loadPortfolio = this.loadPortfolio.bind(this);
  }

  showCoins(coins) {
    this.setState({
      coins,
      loading: false,
    })
  }

  loadPortfolio() {
    coinAggregation().then(this.showCoins.bind(this));
  }

  componentDidMount() {
    this.loadPortfolio();
  }

  render() {
    if(this.loading || !this.state.coins) return <Loader />;
    return <Portfolio coins={this.state.coins} onUpdate={this.loadPortfolio} />
  }
}
