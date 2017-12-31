import * as React from 'react';
import Coin from './Coin';

export default function Coins({coins, onRemove}) {
  return coins.map((coin, index) => <Coin key={`coin-${index}`} coin={coin} onRemove={onRemove} />);
}
