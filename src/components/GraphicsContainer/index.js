import React from 'react';
import { LineChart } from './LineChart';
import { useDataByCountry, useDataByDateRangeByCountry } from '../../hooks';
export const GraphicsContainer = ({ country }) => {
  const { responseRange, error, loading } = useDataByCountry('ES');

  return (
    <div>
      <div>
        <LineChart
          infected={loading ? [] : responseRange.infected}
          deaths={loading ? [] : responseRange.deaths}
          recovered={loading ? [] : responseRange.recovery}
          dates={loading ? [] : responseRange.dates}
        />
      </div>
      <div>
        <LineChart
          infected={loading ? [] : responseRange.newInfected}
          deaths={loading ? [] : responseRange.newDeaths}
          recovered={loading ? [] : responseRange.newRecovered}
          dates={loading ? [] : responseRange.dates}
        />
      </div>
    </div>
  );
};
