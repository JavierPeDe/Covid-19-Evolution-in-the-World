import React from 'react';
import { LineChart } from './LineChart';
import imgLoading from '../../../assets/img/careers-loading.gif';
import style from './index.module.css';
export const GraphicsContainer = ({ responseRange, loading }) => {

  return (
    <div className={style.graphicContainer}>
      <div className={style.graphic}>
        <h1> Graphic asdlfkhnsaldkfhj</h1>
        {loading ? (
          <img src={imgLoading} />
        ) : (
          <LineChart
           
            infected={responseRange.infected}
            deaths={responseRange.deaths}
            recovered={responseRange.recovery}
            dates={responseRange.dates}
          />
        )}
      </div>
      <div className={style.graphic}>
        <h1>Graphic oasdhfopajshdgplo</h1>
        {loading ? (
          <img src={imgLoading} />
        ) : (
          <LineChart
            infected={responseRange.newInfected}
            deaths={responseRange.newDeaths}
            recovered={responseRange.newRecovered}
            dates={responseRange.dates}
          />
        )}
      </div>
    </div>
  );
};
