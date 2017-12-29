const STORAGE_KEY = 'nl.blockfolio.keepitterron';
export default class Storage {
  constructor(storageAdapter = localStorage) {
    this.storage = storageAdapter;
  }

  save(key, collection) {
    return this._set(key, JSON.stringify(collection));
  }

  fetch(key) {
    return JSON.parse(this._get(key));
  }

  push(key, item) {
    const currencies = this.fetch('portfolio');
    currencies.push(item);
    return this.save(key, currencies);
  }

  _get(collection) {
    const key = `${STORAGE_KEY}.${collection}`;
    return this.storage.getItem(key);
  }

  _set(collection, document) {
    const key = `${STORAGE_KEY}.${collection}`;
    return this.storage.setItem(key, document);
  }
}

Storage.STORAGE_KEY = STORAGE_KEY;
