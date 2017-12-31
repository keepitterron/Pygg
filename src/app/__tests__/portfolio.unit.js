import Portfolio from '../services/portfolio';
import Storage from '../services/storage';
const portfolio = new Portfolio();
const storage = new Storage();

describe('Portfolio', () => {
  const coin = {name: 'foo', qty: 10};

  beforeEach(() => {
    storage.save('portfolio', null);
  });

  describe('add', () => {
    it('adds a coin', () => {
      const res = portfolio.add(coin);
      const pfolio = storage.fetch('portfolio');

      expect(pfolio).toEqual([res]);
      expect(res.id.length).toBe(10);
    });
  });

  describe('get', () => {
    it('gets nothing', () => {
      const res = portfolio.get(1234);
      expect(res).toBeUndefined();
    });

    it('gets the coin', () => {
      const newCoin = portfolio.add(coin);
      const getCoin = portfolio.get(newCoin.id);

      expect(newCoin).toEqual(getCoin);
    });
  });

  describe('remove', () => {
    it('removes nothing', () => {
      portfolio.remove(345);
      const pfolio = storage.fetch('portfolio');

      expect(pfolio).toEqual([]);
    });

    it('removes a coin', () => {
      const newCoin = portfolio.add(coin);
      portfolio.remove(newCoin.id);
      const pfolio = storage.fetch('portfolio');

      expect(portfolio.get(newCoin.id)).toBeUndefined();
      expect(pfolio).toEqual([]);
    });
  });

  describe('edit', () => {
    it('replaces a coin with fresh data, keeping the old id', () => {
      const oldCoin = portfolio.add(coin);
      const {id} = oldCoin;

      const newCoin = {name: 'Foo', qty: 100};
      portfolio.edit(id, newCoin);

      const editedCoin = portfolio.get(id);

      expect(editedCoin.name).toBe(newCoin.name);
      expect(editedCoin.qty).toBe(newCoin.qty);
    });
  });

  it('clears the portfolio', () => {
    portfolio.add(coin);
    const pfolio = storage.fetch('portfolio');
    expect(pfolio.length).toBe(1);

    portfolio.clear();
    const pfolioCurrent = storage.fetch('portfolio');
    expect(pfolioCurrent.length).toBe(0);
  });
});
