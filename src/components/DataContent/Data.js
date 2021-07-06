import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./data.module.css";
import CountUp from "react-countup";

const dataResponse = (props) => {
    return (
        <div className={styles.box}>
            <Grid container spacing={3} direction="column">
                <Grid item component={Card} xs={12} className={styles.grid}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" className={styles.colorRed}>
                            <CountUp start={0} end={props.value.data.total.today_confirmed} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{props.value.data.updated_at}</Typography>
                        <Typography variant="body2">{props.value.data.total.source}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} className={styles.grid}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" className={styles.colorGreen}>
                            <CountUp start={0} end={props.value.data.total.today_recovered} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{props.value.data.updated_at}</Typography>
                        <Typography variant="body2">{props.value.data.total.source}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} className={styles.grid}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" className={styles.colorBlack}>
                            <CountUp start={0} end={props.value.data.total.today_deaths} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{props.value.data.updated_at}</Typography>
                        <Typography variant="body2">{props.value.data.total.source}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default dataResponse;