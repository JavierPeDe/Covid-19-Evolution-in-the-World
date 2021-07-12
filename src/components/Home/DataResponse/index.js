import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './data.module.css';
import CountUp from 'react-countup';
import { Doughnut } from 'react-chartjs-2';

export const DataResponse = ({
  confirmed,
  deaths,
  recovered,
  date,
  source,
}) => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    const chart = () => {
      const infectedPercentage = Math.round(
        ((confirmed - deaths - recovered) / confirmed) * 100
      );
      const recoveredPercentage = Math.round((recovered / confirmed) * 100);
      const deathPercentage = Math.round((deaths / confirmed) * 100);
      setChartData({
        labels: [`Currently infected %`, `Recovered %`, `Deaths %`],
        datasets: [
          {
            label: 'Percentage',
            data: [infectedPercentage, recoveredPercentage, deathPercentage],
            backgroundColor: [
              'rgba(216,58,86,0.5)',
              'rgba(74,169,108,0.5)',
              'rgba(91,86,86,0.5)',
            ],
            borderColor: [
              'rgba(216,58,86,1)',
              'rgba(74,169,108,1)',
              'rgba(91,86,86,1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    };
    chart();
  }, [confirmed, deaths, recovered, date, source]);
  return (
    <React.Fragment>
      <div className={styles}>
        <Grid
          container
          spacing={3}
          className={styles.grid1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item component={Card} xs={12} md={3} className={styles.grid}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5" className={styles.colorRed}>
                <CountUp
                  start={0}
                  end={confirmed}
                  duration={2.8}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">{date}</Typography>
              <Typography variant="body2">{source}</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={styles.grid}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" className={styles.colorGreen}>
                <CountUp
                  start={0}
                  end={recovered}
                  duration={2.8}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">{date}</Typography>
              <Typography variant="body2">{source}</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={styles.grid}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" className={styles.colorBlack}>
                <CountUp start={0} end={deaths} duration={2.8} separator="," />
              </Typography>
              <Typography color="textSecondary">{date}</Typography>
              <Typography variant="body2">{source}</Typography>
            </CardContent>
          </Grid>
        </Grid>
        <div className={styles.box}>
          <div className={styles.box1}>
            <Doughnut
              data={chartData}
              options={{
                responsive: true,
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
