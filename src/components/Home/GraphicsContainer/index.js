import React from 'react';
import { LineChart } from './LineChart';
import imgLoading from '../../../assets/img/careers-loading.gif';
import style from './index.module.css';
export const GraphicsContainer = ({ responseRange, loading }) => {
  return (
    <div className={style.graphicContainer}>
      <div className={style.graphic}>
        <h1> Evolution of total cases </h1>
        {loading ? (
          <img src={imgLoading} alt="LOADING" />
        ) : (
          <LineChart
            infected={responseRange.infected}
            deaths={responseRange.deaths}
            recovered={responseRange.recovery}
            dates={responseRange.dates}
            source={responseRange.source}
          />
        )}
      </div>
      <div className={style.graphic}>
        <h1>Confirmed cases per day</h1>
        {loading ? (
          <img src={imgLoading} alt="LOADING" />
        ) : (
          <LineChart
            infected={responseRange.newInfected}
            deaths={responseRange.newDeaths}
            recovered={responseRange.newRecovered}
            dates={responseRange.dates}
            source={responseRange.source}
          />
        )}
      </div>
    </div>
  );
};
