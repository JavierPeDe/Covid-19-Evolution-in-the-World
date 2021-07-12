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

export const useDataByDateRangeByCountry = (country = 'Germany') => {
  const [responseRange, setResponseRange] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var finalDate = moment().format('YYYY-MM-DD');
    var initialDate = moment().subtract(2, 'month').format('YYYY-MM-DD');

    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${initialDate}&date_to=${finalDate}`
        );
        var mapResult = Object.values(result.data.dates);

        var infecteds = mapResult.map((data) => {
          return Object.values(data.countries)[0].today_confirmed;
        });
        var deaths = mapResult.map((data) => {
          return Object.values(data.countries)[0].today_deaths;
        });
        var recovery = mapResult.map((data) => {
          return Object.values(data.countries)[0].today_recovered;
        });

        //Second Graphic
        var newInfecteds = mapResult.map((data) => {
          return Object.values(data.countries)[0].today_open_cases;
        });
        var newDeaths = mapResult.map((data) => {
          return Object.values(data.countries)[0].today_new_deaths;
        });
        var newRecovered = mapResult.map((data) => {
          return Object.values(data.countries)[0].today_new_recovered;
        });

        setResponseRange({
          infected: infecteds,
          deaths: deaths,
          recovery: recovery,
          newInfected: newInfecteds,
          newDeaths: newDeaths,
          newRecovered: newRecovered,
          dates: Object.keys(result.data.dates),
          source: result.data.metadata.by,
        });
        setError('');
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [country]);
  return { responseRange, error, loading };
};

export const useDataByCountry = (country = 'ES') => {
  const [responseRange, setResponseRange] = useState({
    infected: [],
    deaths: [],
    recovery: [],
    newInfected: [],
    newDeaths: [],
    newRecovered: [],
    dates: [],
    source: 'III',
  });
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://corona-api.com/countries/${country}`
        );

        setResponse({
          confirmed:result.data.data.latest_data.confirmed,
          deaths:result.data.data.latest_data.deaths,
          recovered:result.data.data.latest_data.recovered,
          date:moment(result.data.data.updated_at).format('YYYY-MM-DD'),
          source:'World Health Organization',}
        );
        var res = result.data.data.timeline;
        var infecteds = res.map((data) => {
          return data.confirmed;
        });
        var deaths = res.map((data) => {
          return data.deaths;
        });

        var recovery = res.map((data) => {
          return data.recovered;
        });
        //Second Graphic
        var newInfecteds = res.map((data) => {
          return data.new_confirmed;
        });
        var newDeaths = res.map((data) => {
          return data.new_deaths;
        });

        var newRecovered = res.map((data) => {
          return data.new_recovered;
        });
        var dates = res.map((data) => {
          return data.date;
        });
        setResponseRange({
          infected: infecteds.slice().reverse(),
          deaths: deaths.slice().reverse(),
          recovery: recovery.slice().reverse(),
          newInfected: newInfecteds.slice().reverse(),
          newDeaths: newDeaths.slice().reverse(),
          newRecovered: newRecovered.slice().reverse(),
          dates: dates.slice().reverse(),
          source: 'World Health Organization',
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [country]);

  return { response, responseRange, error, loading };
};
