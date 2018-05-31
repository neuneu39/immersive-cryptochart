/**
 * 24時間の履歴データを返す
 *
 * @param {string} cryptocurrency
 * @param {string} target
 * @returns {Promise<{
 *   latest: string,
 *   change: string,
 *   high: string,
 *   low: string,
 *   closes: Array.<{close: number, time: string}>
 * }>}
 */
function getHistoricalData(cryptocurrency, target) {
  return fetch('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=JPY&limit=1440')
    .then(res => res.json())
    .then(json => {
      // return parsed data

      return json;
    });
}

export default {
  getHistoricalData,
};
