import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
export const useCurrentDayDataByCountry = (country = 'Total') => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var date = moment().format('YYYY-MM-DD');
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
          console.log(resultObj);
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

export const useDataByDateRangeByCountry = (country = 'spain') => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var finalDate = moment().format('YYYY-MM-DD');
    var initialDate = moment().subtract(1, 'month').format('YYYY-MM-DD');

    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${initialDate}&date_to=${finalDate}`
        );
        var mapResult = Object.values(result.data.dates);
        var infecteds = mapResult.map((data) => {
          return Object.values(data.countries)[0].today_open_cases;
        });
        var deaths = mapResult.map((data) => {
          return Object.values(data.countries)[0].today_deaths;
        });
        var recovery = mapResult.map((data) => {
          return Object.values(data.countries)[0].today_new_recovered;
        });

        setResponse({
          infected: infecteds,
          deaths: deaths,
          recovery: recovery,
          dates: Object.keys(result.data.dates),
          source: result.data.metadata.by,
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [country]);
  return { response, error, loading };
};