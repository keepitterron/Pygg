import Mapper from './mapper';
const cryptocompareApi = require('cryptocompare');
const mapper = new Mapper();

const coinsIterable = ({Data}) => Object.keys(Data).map((key) => Data[key]);
const coinList = () => cryptocompareApi.coinList().then(coinsIterable);
const coinPrice = (coins) => cryptocompareApi.priceMulti(coins, ['EUR']);
const coinDailyHisto = (coin) => cryptocompareApi.histoDay(coin, 'EUR', { limit: 15});

export default { mapper, coinList, coinPrice, coinDailyHisto, coinsIterable }
