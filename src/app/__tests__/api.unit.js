import Api from '../services/api';
import Mapper from '../services/mapper';
const mapper = new Mapper();

let api;
describe('Api', () => {
  let adapter;
  let storage;
  beforeEach(() => {
    const fn = jest.fn().mockReturnValue(Promise.resolve());
    adapter = {
      coinList: fn,
      coinPrice: fn,
      coinDailyHisto: fn,
      mapper,
    };
    storage = {
      save: jest.fn(),
      get: jest.fn(),
    };

    api = new Api(adapter, storage);
  });

  describe('public methods', () => {
    beforeEach(() => {
      api.fetchDataFor = jest.fn();
    })
    it('calls the list endpoint', () => {
      api.list();
      expect(api.fetchDataFor).toBeCalledWith('list');
    })
    it('calls the prices endpoint', () => {
      api.prices([]);
      expect(api.fetchDataFor).toBeCalledWith('prices', []);
    })
    it('calls the charts endpoint', () => {
      const coin = 'FOO';
      api.charts(coin);
      expect(api.fetchDataFor).toBeCalledWith('charts.FOO', coin);
    })
  });

  describe('fetchDataFor', () => {
    beforeEach(() => {
      api.withStorage = jest.fn();
    });

    it('uses the mapper to fetch data from the api adapter', () => {
      api.fetchDataFor('list', 'bar');
      expect(storage.get).toBeCalledWith('list');
      expect(api.withStorage).toBeCalledWith('list');
      expect(adapter.coinList).toBeCalledWith('bar');
    })

    it('returns data from the cache if found', () => {
      api.promiseFromStorage = jest.fn().mockReturnValue([]);
      api.fetchDataFor('list', 'bar');
      expect(adapter.coinList).not.toBeCalled();
    });
  });

  describe('promiseFromStorage', () => {
    it('returns a promise with data from storage', (done) => {
      const data = ['foo'];
      api.isStale = () => false;
      storage.get = () => ({data});

      api.promiseFromStorage('list').then((d) => {
        expect(d).toEqual(data);
        done();
      }).catch(done.fail);
    });

    it('returns void if no cache', () => {
      expect(api.promiseFromStorage('list')).toBeUndefined();
    });

    it('returns void if cache is stale', () => {
      storage.get = () => ({data: 'foo'});
      api.isStale = () => true;
      expect(api.promiseFromStorage('list')).toBeUndefined();
    });
  });

  describe('withStorage', () => {
    it('returns a function', () => {
      const res = api.withStorage('ohi');
      expect(typeof res).toBe('function');
    });

    it('provides a function to save data in cache', () => {
      const save = api.withStorage('ohi');
      const data = ['foo', 'bar'];
      save(data);
      expect(storage.save.mock.calls[0][0]).toBe('ohi');
      expect(storage.save.mock.calls[0][1].data).toEqual(data);
    });
  });

  describe('isStale', () => {
    const ONE_MINUTE = 60 * 1000;
    const ONE_HOUR = 60 * ONE_MINUTE;
    it('returns true if cache timestamp is older than provided expire hours', () => {
      const now = Date.now();
      expect(api.isStale( now - (ONE_HOUR), 1)).toBe(true);
      expect(api.isStale( now - (2*ONE_HOUR), 1)).toBe(true);
    });

    it('returns false if cache timestamp is not older than provided expire hours', () => {
      const now = Date.now();
      expect(api.isStale( now - (ONE_HOUR) + ONE_MINUTE, 1)).toBe(false);
      expect(api.isStale(now, 1)).toBe(false);
    });

    it('does not cache if expire is 0', () => {
      const now = Date.now();
      expect(api.isStale( now + (ONE_HOUR), 0)).toBe(true);
      expect(api.isStale( now - (ONE_HOUR), 0)).toBe(true);
      expect(api.isStale(now, 0)).toBe(true);
    });
  });
});
