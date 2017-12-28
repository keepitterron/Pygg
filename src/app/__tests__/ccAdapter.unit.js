
import {cryptocompareAdapter} from '../services/ccAdapter';

let adapter;
let api;
const expected = ['bar', 'ahi', 'wat'];
const data = {
  Data: {
    foo: 'bar',
    ohi: 'ahi',
    what: 'wat',
  },
};

describe('ccAdapter', () => {
  beforeEach(() => {
    api = {
      coinList: jest.fn().mockReturnValue(Promise.resolve(data)),
      priceMulti: jest.fn(),
      histoDay: jest.fn(),
    };
    adapter = cryptocompareAdapter(api);
  });

  describe('coinList', () => {
    it('fetches the coinList object and returns an array', (done) => {
      const res = adapter.coinList();

      expect(api.coinList).toBeCalled();
      res.then((data) => {
        expect(data).toEqual(expected);
        done();
      }).catch(done.fail)
    })
  });

  describe('coinPrice', () => {
    it('gets the prices in EUR', () => {
      adapter.coinPrice([]);
      expect(api.priceMulti).toBeCalledWith([], [cryptocompareAdapter.CURRENCY]);
    })
  });

  describe('coinDailyHisto', () => {
    it('gets the price in EUR, limits to 15', () => {
      adapter.coinDailyHisto('foo');
      expect(api.histoDay).toBeCalledWith('foo', cryptocompareAdapter.CURRENCY, {limit: cryptocompareAdapter.LIMIT});
    });
  });
});
