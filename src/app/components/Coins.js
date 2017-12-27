import * as React from 'react';
import Coin from './Coin';

export default function Coins({coins}) {
  return coins.map((coin, index) => <Coin key={`coin-${index}`} coinData={coin} />);
}
