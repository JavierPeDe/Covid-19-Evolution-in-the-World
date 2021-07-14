import { Paper, Switch } from '@material-ui/core';
import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import style from './index.module.css';
import johnsImg from '../../assets/img/JohnsLogo.png';
import woldImg from '../../assets/img/WorldLogo.svg';
import WarningIcon from '@material-ui/icons/Warning';

export const Info = () => {
  const [dark, setDark] = useState(false);

  const theme = createMuiTheme({
    palette: {
      //type: dark ? 'dark' : 'light',
      background: {
        paper: dark ? '#f57c00' : '#ffb74d',
      }
    },
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper height="100vh">
          <Switch checked={dark} onChange={() => setDark(!dark)} />
          <h1>Covid-19 Evolution in the world</h1>
          <h2>
            Covid-19 information from trusted sources via API <i>about-corona</i>
          </h2>
          <h2>Our Data Sources</h2>
          <div className={style.containerSources} background="primary">
            <div>
              <h3>World Health Organization Situation Reports</h3>
              <p>
                source: <br />
                <a
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports"
                  target="_blank"
                  rel="noreferrer"
                >
                  Who Situation Reports
                </a>
              </p>
              <img
                className={style.imgWorld}
                src={woldImg}
                alt="World Health Organization"
              />
            </div>
            <div>
              <h3>Johns Hopkins CSSE</h3>
              <p>
                source: <br />
                <a
                  href="https://github.com/CSSEGISandData/COVID-19"
                  target="_blank"
                  rel="noreferrer"
                >
                  Data Repository by Johns Hopkins CSSE
                </a>{' '}
              </p>
              <img
                className={style.imgJohns}
                src={johnsImg}
                alt="ohns Hopkins CSSE"
              />
            </div>
            <div>
              <h3>Various governmental sources</h3>
              <p>
                source:
                <br />
                <a
                  href="https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases"
                  target="_blank"
                  rel="noreferrer"
                >
                  European Centre for Disease Prevention and Control (ECDC)
                </a>
                <br />
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  US CDC
                </a>{' '}
                <br />
                <a
                  href="http://www.nhc.gov.cn/xcs/yqtb/list_gzbd.shtml"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Health Commission of the People’s Republic of China (NHC)
                </a>{' '}
                <br />
                <a
                  href="http://weekly.chinacdc.cn/news/TrackingtheEpidemic.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  China CDC (CCDC)
                </a>
                <br />
                <a
                  href="https://ncov.dxy.cn/ncovh5/view/pneumonia"
                  target="_blank"
                  rel="noreferrer"
                >
                  DXY.cn. Pneumonia. 2020{' '}
                </a>
              </p>
            </div>
          </div>
          <div className={style.warning}>
            <p>
              <WarningIcon />
              Warning: the data provided and used for the generation of these
              products comes from the aggregation of different sources, each of
              which with different update times and frequencies. Additionally, each
              country has its own accounting criteria, so comparisons of data
              between countries or regions, and even within them over time, may not
              be representative of reality. An example is the case of positive cases
              that depend not only on the spread of the disease but also on the
              number of tests that are carried out.
            </p>
            <p >
              <WarningIcon />
              The content of this website as well as data provided by related API's
              is aggregated from multiple sources and given without guarantee to be
              correct. All information provided on this website is given with the
              best intent and will to provide factual information. In no event shall
              the website operators be held liable for any claim, damages or other
              liabilities.
            </p>
          </div>
        </Paper>
      </ThemeProvider>
    </div>
  );
};
