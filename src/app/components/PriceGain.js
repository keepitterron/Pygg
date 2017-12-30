import * as React from 'react';
import { calculateGain } from '../services/coin';

export default function PriceGain({current, buy, qty}) {

  const gain = calculateGain(current, buy, qty);

  const toggle = () => classShow === '-price' ? '-percent' : '-price';
  const classTrend = gain.upTrend ? '-up' : '-down';
  const classShow = '-price';

  return <div className={['coin__gain', classShow, classTrend].join(' ')} onClick={toggle}>
    <span className="coin__gain--price">{gain.changePrice}&euro;</span>
    <span className="coin__gain--percent">{gain.changePercent}%</span>
  </div>
}
