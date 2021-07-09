import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./data.module.css";
import CountUp from "react-countup";
import { Doughnut } from "react-chartjs-2";

const DataResponse = (props) => {
    const [chartData, setChartData] = useState({});
    useEffect(() => {
        const chart = () => {
            const infectedPercentage = Math.round(((props.value[0] - props.value[1] - props.value[2]) / props.value[0]) * 100);
            const recoveredPercentage = Math.round((props.value[2] / props.value[0]) * 100);
            const deathPercentage = Math.round((props.value[1] / props.value[0]) * 100);
            setChartData({
                labels: ["Infected (%)", "Recovered (%)", "Deaths (%)"],
                datasets: [
                    {
                        label: "Percentage",
                        data: [infectedPercentage, recoveredPercentage, deathPercentage],
                        backgroundColor: [
                            "rgba(216,58,86,1)",
                            "rgba(74,169,108,1)",
                            "rgba(91,86,86,1)"
                        ]
                    }
                ],
            })
        }
        chart()
    }, [props.value])
    return (
        <React.Fragment>
            <Grid container spacing={3} className={styles.grid1} direction="row" justify="center" alignItems="center">
                <Grid item component={Card} xs={12} md={3} className={styles.grid}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" className={styles.colorRed}>
                            <CountUp start={0} end={props.value[0]} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{props.value[3]}</Typography>
                        <Typography variant="body2">{props.value[4]}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.grid}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" className={styles.colorGreen}>
                            <CountUp start={0} end={props.value[2]} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{props.value[3]}</Typography>
                        <Typography variant="body2">{props.value[4]}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.grid}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" className={styles.colorBlack}>
                            <CountUp start={0} end={props.value[1]} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{props.value[3]}</Typography>
                        <Typography variant="body2">{props.value[4]}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <div className={styles.box}>
                <div className={styles.box1}>
                    <Doughnut data={chartData} options={{
                        responsive: true,
                    }} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default DataResponse;