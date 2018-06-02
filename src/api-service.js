import moment from 'moment-timezone';
import numeral from 'numeral';

/**
 * 金額単位をアレする
 *
 * @param {number} value
 * @returns {string}
 */
function convertPriceUnit(value) {
  return numeral(value).format('0,0.00');
}

/**
 * 24時間の履歴データを返す
 *
 * @param {string} cryptocurrency
 * @param {string} target
 * @returns
 * {Promise<{
 *   latest: string,
 *   change: string,
 *   high: string,
 *   low: string,
 *   closes: Array.<{close: number, time: string}>
 * }>}
 */
function getHistoricalData(cryptocurrency, target) {
  return fetch(`https://min-api.cryptocompare.com/data/histominute?fsym=${cryptocurrency}&tsym=${target}&limit=1440`)
    .then(res => res.json())
    .then((json) => {
      const latest = json.Data[json.Data.length - 1].close;
      const change = convertPriceUnit(latest - json.Data[0].close);
      return {
        latest: convertPriceUnit(latest),
        change,
        high: convertPriceUnit(Math.max.apply(null, json.Data.map(item => item.high))),
        low: convertPriceUnit(Math.min.apply(null, json.Data.map(item => item.low))),
        closes: json.Data.map(item => ({
          close: item.close,
          time: moment(item.time * 1000).tz('Asia/Tokyo').format('YYYY-MM-DD hh:mm'), // you can change timezone.
        })),
      };
    });
}

const convertBIT = {
  BTC: 'bitcoin',
}

/**
 * return 24 hour volume and market cap 
 *
 * @param {string} Volume
 * @param {string} marketCap
 * @returns
 * {Promise<{
 *   volume: string,
 *   marketCap: string,
  * }>}
 */
  function getMarketAndVolumeData(cryptoFrom, cryptoTo) {
    cryptoFrom = convertBIT[cryptoFrom];
    console.log(cryptoFrom);
    return fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptoFrom}/?convert=${cryptoTo}`)
      .then(res => res.json())
      .then((json) => {
        console.log(json);
        return {
          volume: json[0]['24h_volume_jpy'],
          marketCap: json[0]['market_cap_jpy'],
        }
      })
  }

export default {
  getHistoricalData,
  getMarketAndVolumeData,
};
