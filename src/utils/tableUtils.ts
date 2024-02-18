//tableUtils.ts

/**
 * Return all possible headers from a data point
 * @param data - The data to extract headers from
 *
 * @returns An array of headers
 *
 */
export function getHeadersFromDataPoint(data: any[] | undefined) {
  const headers = [];
  if (data) {
    for (const key in data[0]) {
      headers.push(key);
    }
  }
  return headers;
}

/**
 * Returns only the preferred headers since there are >20 possible data keys
 * @returns An array of strings
 * 
 */
export function getPreferredHeaders() {
  const headers = [
    "energy-source-desc",
    "plantName",
    "stateName",
    "statusDescription",
    "technology",
    "net-summer-capacity-mw",
    "net-winter-capacity-mw",
    "period",
  ];
  return headers;
}
