import Storage from './storage';
const storage = new Storage();
const nanoid = require('nanoid');

export default class Portfolio {
  add(coin, id = null) {
    coin.ts = Date.now();
    coin.id = id || nanoid(10);
    storage.push('portfolio', coin);
    return coin;
  }

  get(id) {
    const portfolio = storage.fetch('portfolio') || [];
    return portfolio.find((coin) => coin.id === id);
  }

  remove(id) {
    const portfolio = storage.fetch('portfolio') || [];
    const newPortfolio = portfolio.filter((coin) => coin.id !== id);
    storage.save('portfolio', newPortfolio);
  }

  edit(id, coin) {
    this.remove(id);
    return this.add(coin, id);
  }

  clear() {
    storage.save('portfolio', []);
  }
}
