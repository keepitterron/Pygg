import * as React from 'react';

export default function WalletHeader({value, children}) {
  return <div className="coin coin--wallet">
    <h2>Wallet: {value}&euro;</h2>
    {children}
  </div>
}
