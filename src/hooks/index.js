import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrentDayDataByCountry = (country = 'Total') => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    const callApi = async () => {
      try {
        const result = await axios.get(
          `https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`
        );
        if (country === 'Total') {
          setResponse([
            result.data.total.today_confirmed,
            result.data.total.today_recovered,
            result.data.total.today_deaths,
            result.data.updated_at,
            result.data.total.source,
          ]);
        } else {
          var resultObj = Object.values(
            Object.values(Object.values(result.data.dates))[0].countries
          );
          setResponse([
            resultObj[0].today_confirmed,
            resultObj[0].today_deaths,
            resultObj[0].today_recovered,
            resultObj[0].date,
            resultObj[0].source,
          ]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    callApi();
  }, [country]);

  return { response, error, loading };
};
