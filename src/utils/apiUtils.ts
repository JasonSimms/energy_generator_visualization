//apiUtils.ts

/**
 * Constructs a URL for the EIA API based on the provided parameters.
 *
 * @param params - An object containing the parameters for the API request.
 * @param params.frequency - The frequency of the data (e.g., 'monthly').
 * @param params.data - An array of data types to include in the request (e.g., ['county', 'net-summer-capacity-mw', 'net-winter-capacity-mw']).
 * @param params.sort - An array of objects specifying the sort order for each column (e.g., [{ column: 'period', direction: 'desc' }]).
 * @param params.offset - The offset for the data, used for pagination.
 * @param params.length - The number of records to return.
 *
 * @returns A string representing the constructed URL.
 *
 * @example
 * const url = buildEIAUrl({
 *   frequency: 'monthly',
 *   data: ['county', 'net-summer-capacity-mw', 'net-winter-capacity-mw'],
 *   sort: [{ column: 'period', direction: 'desc' }],
 *   offset: 0,
 *   length: 5000
 * });
 * console.log(url); // Logs the constructed URL to the console.
 * 
 *  const base_URL = 'https://api.eia.gov/v2/electricity/operating-generator-capacity/data/?frequency=monthly&data[0]=county&data[1]=net-summer-capacity-mw&data[2]=net-winter-capacity-mw&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000'
 * 
 */
export function buildEIAUrl(params: {
    frequency: string;
    data: string[];
    sort: { column: string; direction: string }[];
    offset: number;
    length: number;
  }) {
    const url = new URL(
      "https://api.eia.gov/v2/electricity/operating-generator-capacity/data/"
    );
  
    // Add frequency
    url.searchParams.append("frequency", params.frequency);
  
    // Add data
    params.data.forEach((value, index) => {
      url.searchParams.append(`data[${index}]`, value);
    });
  
    // Add sort
    params.sort.forEach((value, index) => {
      url.searchParams.append(`sort[${index}][column]`, value.column);
      url.searchParams.append(`sort[${index}][direction]`, value.direction);
    });
  
    // Add offset and length
    url.searchParams.append("offset", params.offset.toString());
    url.searchParams.append("length", params.length.toString());
  
    return url.toString();
  }
  