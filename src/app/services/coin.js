const numeral = require('numeral');

function formatPrice(price) {
  if(price > 999) return numeral(price).format('0.[0]a');
  if(price > 9) return numeral(price).format('0');
  if(price > 0.01) return numeral(price).format('0.[00]');
  return numeral(price).format('0.[0000]');
}

function coinsValue(coins) {
  const value = coins.reduce((total, coin) => total += coin.value, 0);
  return formatPrice(value);
}

function portfolioMapper(portfolioData) {
  return portfolioData.reduce((portfolio, coin) => {
    if(portfolio[coin.name]) portfolio[coin.name].qty += coin.qty;
    else portfolio[coin.name] = coin;
    return portfolio;
  }, {});
}

function coinDataAggregate(dataPoints) {
  const [coinData, priceData, portfolio] = dataPoints;
  if(!coinData) return [];

  return coinData.map((coin) => {
    const { qty, price: buyPrice } = (portfolio[coin.Name] || {})
    coin.qty = qty || 0;
    coin.buyPrice = buyPrice || 0;
    const price = priceData[coin.Name].EUR || 0;
    return {
      coin,
      price,
      value: price * coin.qty,
    }
  }).sort((a, b) => parseInt(b.value) - parseInt(a.value));
}

function coinModel(coinData, price) {
  return {
    qty: coinData.qty,
    name: coinData.CoinName,
    label: coinData.Name,
    icon: `${coinData.Name}.svg`,
    value: price,
    buyPrice: coinData.buyPrice,
    total: price * coinData.qty,
  };
}

function calculateGain(current, buy, qty) {
  const totalBuy = buy * qty;
  const totalCurrent = current * qty;
  const upTrend = totalCurrent >= totalBuy;
  const changePrice = formatPrice(totalCurrent - totalBuy);
  const changePercent = changePrice / totalBuy * 100;

  return {
    upTrend,
    changePrice,
    changePercent,
  }
}

export { formatPrice, coinModel, coinsValue, coinDataAggregate, portfolioMapper, calculateGain }
