import { isUpTrend, rgbaColorForTrend, dataToChart } from '../services/chart';

describe('Chart Service', () => {
  describe('isUpTrend', () => {
    it('returns true if today close is better than yesterday', () => {
      const data = [{close: 9}, {close: 10}];
      const result = isUpTrend(data);
      const expected = true;

      expect(result).toEqual(expected);
    })
  });

  const positiveRgba = '95,245,87';
  const negativeRgba = '246,143,159';

  describe('rgbaColorForTrend', () => {
    it('returns positive trend colour', () => {
      const result = rgbaColorForTrend(true);
      const expected = positiveRgba;

      expect(result).toEqual(expected);
    })

    it('returns negative trend colour', () => {
      const result = rgbaColorForTrend(false);
      const expected = negativeRgba;

      expect(result).toEqual(expected);
    })
  });

  describe('dataToChart', () => {
    it('returns data formatted for the chart, calculatng uptrend', () => {
      const data = [{time: 1, close: 9}, {time: 2, close: 10}];
      const result = dataToChart(data);

      expect(result.data[0].x).toBe(1);
      expect(result.props.areaColor).toContain(positiveRgba);
    })
  });
});
