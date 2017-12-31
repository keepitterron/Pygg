import * as React from 'react';

import Chart from './Chart';
import CoinIcon from './CoinIcon';
import PriceGain from './PriceGain';
import { formatPrice } from '../services/coin';

export default function Coin({coin, onRemove}) {
  const removeCoin = () => onRemove(coin.id);

  return (<div className="coin">
    <a className="coin__remove" title="delete coin" onClick={removeCoin}>&times;</a>
    <div className="coin__icon">
      <CoinIcon icon={coin.icon} fallback="/icons/pygg.svg" />
    </div>
    <div className="coin__info">
      <h2>{coin.label}</h2>
      <p>({formatPrice(coin.value)}&euro;)</p>
    </div>
    <div className="coin__data">
      <h2>{formatPrice(coin.total)}&euro;</h2>
      <div className="coin__qty">
        ({formatPrice(coin.qty)} coins)
      </div>
      <PriceGain current={coin.value} buy={coin.buyPrice} qty={coin.qty} />
    </div>
    <div className="coin__chart">
      <Chart coin={coin.label} />
    </div>
  </div>);
}
