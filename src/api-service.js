import numeral from "numeral";
import moment from "moment-timezone";
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
    .then(json => {
      let close_first = json.Data[0].close;
      let close_end = json.Data[json.Data.length-1].close;
      let high = Math.max.apply(null, json.Data.map( value => value.high ));
      let low = Math.min.apply(null, json.Data.map( value => value.low ))
      let close = json.Data.map( value => ({
        close: value.close,
        time: moment.unix(value.time, "Asia/Tokyo").format("YYYY-MM-DD HH:mm:ssZ")
      }));
      // return parsed data
      return {
        latest: close_end,
        change: close_end - close_first,
        high: numeral(high).format('0,0.00'),
        low: low, 
        closes: close,
      }
    });
}

export default {
  getHistoricalData,
};
