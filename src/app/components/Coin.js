import * as React from 'react';

import Chart from './Chart';
import CoinIcon from './CoinIcon';
import { coinModel } from '../services/coin';

export default function Coin({coinData}) {
  const { coin, price } = coinData;
  const Coin = coinModel(coin, price);

  return (<div className="coin">
    <div className="coin__icon">
      <CoinIcon icon={Coin.icon} fallback="/icons/GBYTE.svg" />
    </div>
    <div className="coin__info">
      <h2>{Coin.label}</h2>
      <p>({Coin.value}&euro;)</p>
    </div>
    <div className="coin__data">
      <h2>{Coin.total}&euro;</h2>
      <div className="coin__qty">({Coin.qty} coins)</div>
    </div>
    <div className="coin__chart">
      <Chart coin={Coin.label} />
    </div>
  </div>);
}
