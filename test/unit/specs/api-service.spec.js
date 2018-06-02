import apiService from '@/api-service';

describe('API Service: getMarketInformation', () => {
  it('should process data correctly', (done) => {
    fetch.mockResponseOnce(JSON.stringify(
      [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          rank: '1',
          price_usd: '7510.54',
          price_btc: '1.0',
          '24h_volume_usd': '4778030000.0',
          market_cap_usd: '128202191474',
          available_supply: '17069637.0',
          total_supply: '17069637.0',
          max_supply: '21000000.0',
          percent_change_1h: '0.0',
          percent_change_24h: '0.01',
          percent_change_7d: '0.38',
          last_updated: '1527916473',
          price_jpy: '822741.976652',
          '24h_volume_jpy': '523409215143.0602416992',
          market_cap_jpy: '14043906886105',
        },
      ],
    ));

    apiService.getMarketInformation('BTC', 'JPY')
      .then((json) => {
        expect(json.volume).toBe('523.41 B'); // throw
        expect(json.marketCap).toBe('14.04 T');
        done();
      });
  });
});
