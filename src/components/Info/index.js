import { Grid } from '@material-ui/core';
import React from 'react';
import style from './index.module.css';
import { info } from './SourceInfo/index';
import { SourceInfo } from './SourceInfo/SourceInfo';
import WarningIcon from '@material-ui/icons/Warning';

export const Info = () => {
  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <h1>Covid-19 Evolution </h1>
        <h2>
          Covid-19 information from trusted sources via API <i>about-corona</i>
        </h2>
      </div>
      <div className={style.infoContainer}>
        {info.map((data) => (
          <SourceInfo
            key={data.key}
            title={data.title}
            source={data.source}
            source2={data.source2}
            source3={data.source3}
            link={data.link}
            link2={data.link2}
            link3={data.link3}
          />
        ))}
      </div>

      <div className={style.warning}>
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <WarningIcon fontSize="large" style={{ paddingRight: '5px' }} />
          </Grid>
          <Grid item>
            <h2>Warning!</h2>
          </Grid>
        </Grid>
        <p>
          The data provided and used for the generation of these products comes
          from the aggregation of different sources, each of which with
          different update times and frequencies. Additionally, each country has
          its own accounting criteria, so comparisons of data between countries
          or regions, and even within them over time, may not be representative
          of reality. An example is the case of positive cases that depend not
          only on the spread of the disease but also on the number of tests that
          are carried out.
        </p>
        <p>
          The content of this website as well as data provided by related API's
          is aggregated from multiple sources and given without guarantee to be
          correct. All information provided on this website is given with the
          best intent and will to provide factual information. In no event shall
          the website operators be held liable for any claim, damages or other
          liabilities.
        </p>
      </div>
    </div>
  );
};
