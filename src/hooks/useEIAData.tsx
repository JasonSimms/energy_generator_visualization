import { useEffect, useState } from "react";

export const useEIAData = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("useEIAData called");
        // fetch(
        //   `https://api.eia.gov/series/?api_key=${process.env.REACT_APP_EIA_API_KEY}&series_id=${seriesId}`
        // )
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setData(data.series[0].data);
        //     setLoading(false);
        //   });
    }, []);

    return { data, loading };
};


//https://api.eia.gov/v2/electricity/operating-generator-capacity/data/?frequency=monthly&data[0]=county&data[1]=net-summer-capacity-mw&data[2]=net-winter-capacity-mw&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000