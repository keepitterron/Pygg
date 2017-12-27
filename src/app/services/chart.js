function isUpTrend(chartData) {
  const [today] = chartData.slice(-1);
  const [yesterday] = chartData.slice(-2);

  return today.close >= yesterday.close;
}

function chartPoint({time, close}) {
  return {x: time, y: close, active: false};
}

function rgbaColorForTrend(upTrend) {
  const positive = '95,245,87';
  const negative = '246,143,159';
  return upTrend ? positive : negative;
}

function chartData(chartData, upTrend, defaultProps = DEFAULT_PROPS) {
  const colorRGBA = rgbaColorForTrend(upTrend);
  const data = chartData.map(chartPoint);
  const props = Object.assign({}, defaultProps, {
    areaColor: `rgba(${colorRGBA}, .4)`,
    pathColor: `rgba(${colorRGBA}, 1)`,
    pointsStrokeColor: `rgba(${colorRGBA}, 1)`,
  });

  return {
    data,
    props,
  }
}

function dataToChart(data) {
  return chartData(data, isUpTrend(data));
}

const DEFAULT_PROPS = {
  areaVisible: true,
  axisVisible: false,
  gridVisible: false,
  labelsVisible: false,
  pathVisible: true,
  pointsColor: '#fff',
  pointsRadius: 1,
  labelsCountY: 0.01,
  pointsStrokeWidth: 2,
  viewBoxHeight: 100,
  viewBoxWidth: 200,
};

export { chartData, rgbaColorForTrend, isUpTrend, dataToChart, DEFAULT_PROPS };
