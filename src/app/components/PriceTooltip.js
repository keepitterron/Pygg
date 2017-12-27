import * as React from 'react';

const tsToDate = (ts) => new Date(ts * 1000).toLocaleString().split(',')[0];

export default function PriceTooltip({ tooltip }) {
  if(!tooltip) return <div></div>;

  const {x,y} = tooltip;
  return <div className="coin__tooltip">
    <span>{tsToDate(x)}</span> &mdash; <span>{y}</span>
  </div>
}
