import { formatPrice, coinModel, coinsValue, portfolioMapper, coinDataAggregate, calculateGain } from '../services/coin';

describe('Coin Service', () => {
  describe('formatPrice', () => {
    it('returns no zeros for numbers from 10 up to 1000', () => {
      testPrice(84.0987, '84');
    })

    it('formats small numbers', () => {
      testPrice(0.00987, '0.0099');
    })

    it('removes unnecessary zeros', () => {
      testPrice(7.00, '7');
    })

    it('rounds up to one decimal', () => {
      testPrice(4.0987, '4.1');
    })

    it('rounds up to two decimal', () => {
      testPrice(4.009, '4.01');
    })

    it('rounds up to integer after two decimal', () => {
      testPrice(4.003, '4');
    })

    it('uses K for numbers after 1000', () => {
      testPrice(4003, '4k');
      testPrice(1990, '2k');
      testPrice(4520, '4.5k');
      testPrice(999000, '999k');
    });

    it('uses M for millions. LAMBO BABY', () => {
      testPrice(1220000, '1.2m');
    });
  });

  describe('coinModel', () => {
    it('returns a coin model, from coin data and price', () => {
      const coinData = {
        id: 'aa00',
        qty: 10,
        CoinName: 'brobot',
        Name: 'BRO',
        buyPrice: 0.001,
      };
      const result = coinModel(coinData, 4.07);
      const expected = {
        id: coinData.id,
        qty: coinData.qty,
        name: coinData.CoinName,
        label: coinData.Name,
        icon: 'BRO.svg',
        value: 4.07,
        buyPrice: 0.001,
        total: 40.7,
      };

      expect(result).toEqual(expected);
    });
  });

  describe('coinsValue', () => {
    it('returns the total value', () => {
      const coinData = [{total: 500, bar: []}, {total: 500}, {foo: 'bar', total: 500}];

      const result = coinsValue(coinData);
      const expected = '1.5k';

      expect(result).toEqual(expected);
    });
  });

  describe('portfolioMapper', () => {
    it('maps data using name as key for easy access', () => {
      const data = [
        {name:'FOO', qty: 5, baz: 'bar'},
        {name:'BAR', qty: 15, baz: 'foo'},
      ];
      const expected = {
        FOO: {name:'FOO', qty: 5, baz: 'bar'},
        BAR: {name:'BAR', qty: 15, baz: 'foo'},
      };
      const result = portfolioMapper(data);

      expect(result).toEqual(expected);
    });

    it('sums qty when coin has multiple entries', () => {
      const data = [
        {name:'FOO', qty: 5, baz: 'bar'},
        {name:'BAR', qty: 15, baz: 'foo'},
        {name:'FOO', qty: 5},
      ];
      const expected = {
        FOO: {name:'FOO', qty: 10, baz: 'bar'},
        BAR: {name:'BAR', qty: 15, baz: 'foo'},
      };
      const result = portfolioMapper(data);

      expect(result).toEqual(expected);
    });
  });

  describe('coinDataAggregate', () => {
    it('does nothing when no data is provided', () => {
      expect(coinDataAggregate([])).toEqual([]);
    })

    it('returns an arrays of coins with price and value, sorted by value', () => {
      const dataPoints = [
        [
          {Name:'FOO', CoinName: 'foo', baz: 5},
          {Name:'BAR', CoinName: 'bar', baz: 5},
          {Name:'BAZ', CoinName: 'baz', baz: 5},
          {Name:'ETH'},
        ],
        {
          FOO: {EUR: 10},
          BAR: {EUR: 1},
          BAZ: {EUR: 100},
          ETH: {},
        },
        {
          FOO: {qty: 5, price: 0.01, id: 1},
          BAR: {qty: 15, id: 2},
          BAZ: {qty: 10, id: 3},
        },
      ];

      const result = coinDataAggregate(dataPoints);
      const expected = [
        {id: 3, 'label': 'BAZ', name: 'baz', icon: 'BAZ.svg', 'qty': 10, buyPrice: 0, 'value': 100, 'total': 1000},
        {id: 1, 'label': 'FOO', name: 'foo', icon: 'FOO.svg', 'qty': 5, buyPrice: 0.01, 'value': 10, 'total': 50},
        {id: 2, 'label': 'BAR', name: 'bar', icon: 'BAR.svg', 'qty': 15, buyPrice: 0, 'value': 1, 'total': 15},
        {id: undefined, 'label': 'ETH', name: undefined, icon: 'ETH.svg', 'qty': 0, buyPrice: 0, 'value': 0, 'total': 0},
      ];

      expect(result).toEqual(expected);
    });
  });

  describe('calculateGain', () => {
    it('checks the performance of a coin from buy to current: gain', () => {
      const expected = {upTrend: true, changePrice: '500', changePercent: 100};
      const res = calculateGain(10, 5, 100);

      expect(res).toEqual(expected);
    });

    it('checks the performance of a coin from buy to current: loss', () => {
      const expected = {upTrend: false, changePrice: '-25', changePercent: -20};
      const res = calculateGain(1, 1.25, 100);

      expect(res).toEqual(expected);
    });
  });
});

const testPrice = (price, expected) => {
  const result = formatPrice(price);

  expect(result).toBe(expected);
};
