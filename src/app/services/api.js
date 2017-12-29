import ccAdapter from './ccAdapter';
import Storage from './storage';
const storageAdapter = new Storage();

export default class Api {
  constructor(adapter, storage) {
    this.api = adapter || ccAdapter;
    this.storage = storage || storageAdapter;
    this.mapper = this.api.mapper;

    this.list = () => this.fetchDataFor('list');
    this.prices = (coins) => this.fetchDataFor('prices', coins);
    this.charts = (coin) => this.fetchDataFor(`charts.${coin}`, coin);
  }

  fetchDataFor(suffix, args) {
    const data = this.promiseFromStorage(suffix);
    if(data) return data;

    const fn = this.mapper.apiFn(suffix);
    return this.api[fn](args).then(this.withStorage(suffix));
  }

  promiseFromStorage(suffix) {
    const data = this.storage.fetch(suffix);
    if(!data || !data.data) return;
    if(this.isStale(data.ts, this.mapper.expire(suffix))) return;
    return Promise.resolve(data.data);
  }

  withStorage(suffix) {
    return (data) => {
      this.storage.save(suffix, { data, ts: Date.now() });
      return data;
    }
  }

  isStale(cacheTs, expire) {
    if(expire === 0) return true;

    const nowTs = Date.now();
    const diffMs = nowTs - cacheTs;
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000);

    return diffHrs >= expire;
  }
}
