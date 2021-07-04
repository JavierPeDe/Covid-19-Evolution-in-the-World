import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrentDayDataByCountry = (country) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  var d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  const callApi = async () => {
    try {
      const result = await axios.get(
        `https://api.covid19tracking.narrativa.com/api/${date}/country/spain`
      );
      setResponse([
        result.data.total.today_confirmed,
        result.data.total.today_recovered,
        result.data.total.today_deaths,
        result.data.updated_at,
      ]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(async () => {
    callApi();
  }, []);
  
  return { response, error, loading };
};
