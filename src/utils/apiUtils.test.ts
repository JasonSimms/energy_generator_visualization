// apiUtils.test.ts

import { buildEIAUrl } from './apiUtils';
import { expect, it, describe } from 'vitest'


describe('buildEIAUrl', () => {
  it('should correctly build the URL with the provided parameters', () => {
    const params = {
      frequency: 'monthly',
      data: ['county', 'net-summer-capacity-mw', 'net-winter-capacity-mw'],
      sort: [{ column: 'period', direction: 'desc' }],
      offset: 0,
      length: 5000
    };

    const url = buildEIAUrl(params);

    expect(url).toBe('https://api.eia.gov/v2/electricity/operating-generator-capacity/data/?frequency=monthly&data%5B0%5D=county&data%5B1%5D=net-summer-capacity-mw&data%5B2%5D=net-winter-capacity-mw&sort%5B0%5D%5Bcolumn%5D=period&sort%5B0%5D%5Bdirection%5D=desc&offset=0&length=5000');
  });
});