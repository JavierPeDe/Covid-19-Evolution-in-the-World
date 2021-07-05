import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrentDayDataByCountry = (country) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    var d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    const callApi = async () => {
      try {
        const result = await axios.get(
          `https://api.covid19tracking.narrativa.com/api/${date}/country/spain`
        );
        setResponse([result]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    callApi();
  }, [country]);

  console.log(response)
  return { response, loading, error }
};

export default useCurrentDayDataByCountry;