import React from 'react';
import { Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import style from './index.module.css';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '75%',
    height: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '0',
    left:'10%',
  },
}));

export const LineChart = ({ infected, deaths, recovered, dates, source }) => {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const data = {
    labels: dates,
    datasets: [
      {
        label: `Infected`,
        data: infected,
        backgroundColor: 'rgba(216,58,86,0.2)',
        borderColor: 'rgba(216,58,86,1)',
        borderWidth: 1,
        fill: '2',
        pointRadius: 0,
      },
      {
        label: `Deaths`,
        data: deaths,
        backgroundColor: 'rgba(91,86,86,0.2)',
        borderColor: 'rgba(91,86,86,1)',
        pointRadius: 0,

        borderWidth: 1,
        fill: 'origin',
      },
      {
        label: `Recovered`,
        data: recovered,
        backgroundColor: 'rgba(74,169,108,0.2)',
        borderColor: 'rgba(74,169,108,1)',
        borderWidth: 1,
        fill: '1',
        pointRadius: 0,
      },
    ],
  };
  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={style.container}>
      <AspectRatioIcon className={style.iconStyle} type="button" onClick={handleOpen} />
      <Line data={data} options={lineOptions} height={400} width={600} />
      <p>{`Source: ${source}`}</p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div  className={classes.paper}>
          <Line data={data} options={lineOptions} height={'400'} width={600} />
        </div>
      </Modal>
    </div>
  );
};
