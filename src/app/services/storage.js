const STORAGE_KEY = 'nl.blockfolio.keepitterron';

const storageGet = (collection) => {
  const key = `${STORAGE_KEY}.${collection}`;
  return localStorage.getItem(key);
}
const storageSet = (collection, document) => {
  const key = `${STORAGE_KEY}.${collection}`;
  return localStorage.setItem(key, document);
}

const getItem = (key) => JSON.parse(storageGet(key));
const setItem = (key, collection) => storageSet(key, JSON.stringify(collection));
const addItem = (key, item) => {
  const currencies = getItem('portfolio');
  // const el = currencies.find(({coin}) => coin === item.name);
  // if(el) return; // TODO edit with object merge?

  currencies.push(item);
  storageSet(key, JSON.stringify(currencies));
}

export default {
  key: STORAGE_KEY,
  save: setItem,
  add: addItem,
  get: getItem,

};

// storageSet('portfolio', JSON.stringify([]));
// const data = '[{"name":"ETH","qty":23.43241,"ts":1464732000},{"name":"ETC","qty":37.78709,"ts":1462140000},{"name":"PIVX","qty":250,"ts":1489964400},{"name":"XEM","qty":1000,"ts":1489964400},{"name":"STEEM","qty":75,"ts":1489964400},{"name":"GNT","qty":485,"ts":1489964400},{"name":"XRP","qty":1000,"ts":1489964400},{"name":"XRP","qty":2000,"ts":1493762400},{"name":"BTC","qty":0.002,"ts":1493762400},{"name":"RDD","qty":1000000,"ts":1495058400},{"name":"XWC","qty":10000,"ts":1495317600},{"name":"RISE","qty":3000,"ts":1495663200},{"name":"BAT","qty":1037.87329102,"ts":1497564000},{"name":"OMG","qty":12.7669649,"ts":1504044000},{"name":"ADA","qty":1072.41,"ts":1513292400},{"name":"EOS","qty":519.48,"ts":1513551600},{"name":"ADA","qty":791.66666667,"ts":1513551600},{"name":"BTS","qty":1200,"ts":1513551600},{"name":"ADA","qty":1663.05435145,"ts":1513638000}]';

const data = '[{"name":"RDD","qty":1000000,"ts":1495058400},{"name":"ETH","qty":23.43241,"ts":1464732000},{"name":"ETC","qty":37.78709,"ts":1462140000},{"name":"PIVX","qty":250,"ts":1489964400},{"name":"ADA","qty":1663.05435145,"ts":1513638000}]';
// storageSet('portfolio', data);

