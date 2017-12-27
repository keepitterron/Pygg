const MAP_FN = {
  'list': 'coinList',
  'prices': 'coinPrice',
  'charts': 'coinDailyHisto',
};

const MAP_EXPIRATION = {
  'list': 48,
  'prices': 0,
  'charts': 2,
};

export default class Mapper {
  constructor(mapFn, mapExpire) {
    this.mapFn = mapFn || MAP_FN;
    this.mapExpire = mapExpire || MAP_EXPIRATION;
  }

  expire(suffix) {
    return this._mapperFn(suffix, this.mapExpire);
  }

  apiFn(suffix) {
    return this._mapperFn(suffix, this.mapFn);
  }

  _mapperFn(suffix, mapper) {
    const key = this._mapperKey(suffix);
    return mapper[key];
  }

  _mapperKey(suffix) {
    return suffix.split('.')[0];
  }
}
