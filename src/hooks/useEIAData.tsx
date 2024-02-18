// useEIAData.tsx

import { buildEIAUrl } from '../utils/apiUtils';
import { useEffect, useState } from "react";


/**
 * Custom React hook for fetching data from the EIA API.
 *
 * This hook takes a URL as a parameter, which should be constructed using the `buildEIAUrl` function.
 * It returns an object containing the following properties:
 * - `data`: The data returned from the API. This will be `null` before the data is loaded.
 * - `isLoading`: A boolean indicating whether the data is currently being loaded.
 * - `error`: Any error that occurred while fetching the data. This will be `null` if no error occurred.
 *
 * The hook handles all aspects of fetching the data, including sending the request, parsing the response,
 * and handling errors. It uses the `useEffect` hook to fetch the data when the component mounts, and it
 * updates the `data`, `isLoading`, and `error` values as appropriate.
 *
 * @param url - The URL to fetch data from. This should be constructed using the `buildEIAUrl` function.
 *
 * @returns An object containing the `data`, `isLoading`, and `error` values.
 *
 * @example
 * const { data, isLoading, error } = useEIAData(url);
 */
export function useEIAData() {
  const [data, setData] = useState<[][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const base_URL = buildEIAUrl({
      frequency: "monthly",
      data: ["county", "net-summer-capacity-mw", "net-winter-capacity-mw"],
      sort: [{ column: "period", direction: "desc" }],
      offset: 0,
      length: 5000,
    });
    const key = "&api_key=" + import.meta.env.VITE_EIA_API_KEY; // Add your API key here
    fetch(base_URL + key)
      .then((response) => response.json())
      .then((data) => {
        if (data?.response?.data) {
          setData(data.response.data);
          setIsLoading(false);
        } else {
            setError(new Error("Error fetching data"));
            console.error(data);
        }
      });
  }, []);

  return { data, isLoading, error };
}

