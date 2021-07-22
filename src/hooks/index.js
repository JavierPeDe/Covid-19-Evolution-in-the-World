import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
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
          confirmed: result.data.data.latest_data.confirmed,
          deaths: result.data.data.latest_data.deaths,
          recovered: result.data.data.latest_data.recovered,
          date: moment(result.data.data.updated_at).format('YYYY-MM-DD'),
          source: 'World Health Organization',
        });
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
