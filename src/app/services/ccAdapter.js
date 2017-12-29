import Mapper from './mapper';
const cryptocompareApi = require('cryptocompare');
const mapper = new Mapper();

const CURRENCY = 'EUR';
const LIMIT = 15;
const coinsIterable = ({Data}) => Object.keys(Data).map((key) => Data[key]);

export function cryptocompareAdapter(api = cryptocompareApi) {
  const coinList = () => api.coinList().then(coinsIterable);
  const coinPrice = (coins) => api.priceMulti(coins, [CURRENCY]);
  const coinDailyHisto = (coin) => api.histoDay(coin, CURRENCY, { limit: LIMIT});

  return { mapper, coinList, coinPrice, coinDailyHisto }
}

cryptocompareAdapter.CURRENCY = CURRENCY;
cryptocompareAdapter.LIMIT = LIMIT;

export default cryptocompareAdapter();
