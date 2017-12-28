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
