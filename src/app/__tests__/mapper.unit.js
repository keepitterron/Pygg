import Mapper from '../services/mapper';

const MAP_FN = {
  'list': 'myList',
  'prices': 'myPrices',
};

const MAP_EXPIRATION = {
  'list': 48,
  'prices': 0,
};

let mapper;
describe('mapper', () => {

  it('has default params', () => {
    const m = new Mapper();
    expect(m.mapFn).not.toBeUndefined();
    expect(m.mapExpire).not.toBeUndefined();
  });

  beforeEach(() => {
    mapper = new Mapper(MAP_FN, MAP_EXPIRATION);
  });

  it('returns the expiration', () => {
    expect(mapper.expire('list')).toBe(MAP_EXPIRATION.list);
    expect(mapper.expire('prices')).toBe(MAP_EXPIRATION.prices);
  });

  it('returns the mapped function', () => {
    expect(mapper.apiFn('list')).toBe(MAP_FN.list);
    expect(mapper.apiFn('prices')).toBe(MAP_FN.prices);
  });

  it('correctly handles keys with a dot', () => {
    const key = 'list.foo.bar';
    expect(mapper._mapperKey(key)).toBe('list');
    expect(mapper.apiFn(key)).toBe(MAP_FN.list);
    expect(mapper.expire(key)).toBe(MAP_EXPIRATION.list);
  });

});
