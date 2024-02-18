//utils/tableUtils.test.ts
import { getHeadersFromDataPoint, getPreferredHeaders } from './tableUtils';
import { expect, it, describe } from 'vitest'


const dataSnapshot = [{
    "period": "2023-11",
    "stateid": "NJ",
    "stateName": "New Jersey",
    "sector": "ipp-non-chp",
    "sectorName": "IPP Non-CHP",
    "entityid": "61944",
    "entityName": "MN8 Energy LLC",
    "plantid": "60763",
    "plantName": "Holland Solar",
    "generatorid": "PV1",
    "technology": "Solar Photovoltaic",
    "energy_source_code": "SUN",
    "energy-source-desc": "Solar",
    "prime_mover_code": "PV",
    "balancing_authority_code": "PJM",
    "balancing-authority-name": "PJM Interconnection, LLC",
    "status": "OP",
    "statusDescription": "Operating",
    "county": "Hunterdon",
    "net-summer-capacity-mw": "3",
    "net-winter-capacity-mw": "3",
    "unit": null,
    "net-summer-capacity-mw-units": "MW",
    "net-winter-capacity-mw-units": "MW"
}]

describe('getHeadersFromDataPoint', () => {
    it('should return an array of headers', () => {
        const headers = getHeadersFromDataPoint(dataSnapshot);
        expect(headers).toEqual([
            "period",
            "stateid",
            "stateName",
            "sector",
            "sectorName",
            "entityid",
            "entityName",
            "plantid",
            "plantName",
            "generatorid",
            "technology",
            "energy_source_code",
            "energy-source-desc",
            "prime_mover_code",
            "balancing_authority_code",
            "balancing-authority-name",
            "status",
            "statusDescription",
            "county",
            "net-summer-capacity-mw",
            "net-winter-capacity-mw",
            "unit",
            "net-summer-capacity-mw-units",
            "net-winter-capacity-mw-units"
        ]);
    });
});

describe('getPreferredHeaders', () => {
    it('should return an array of preferred headers', () => {
        const headers = getPreferredHeaders();
        expect(headers).toEqual([
            "energy-source-desc",
            "plantName",
            "stateName",
            "statusDescription",
            "technology",
            "net-summer-capacity-mw",
            "net-winter-capacity-mw",
            "period",
        ]);
    });
})
