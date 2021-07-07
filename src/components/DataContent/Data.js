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
                            <CountUp start={0} end={props.value[0]} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{props.value[3]}</Typography>
                        <Typography variant="body2">{props.value[4]}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} className={styles.grid}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" className={styles.colorGreen}>
                            <CountUp start={0} end={props.value[2]} duration={2.8} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{props.value[3]}</Typography>
                        <Typography variant="body2">{props.value[4]}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} className={styles.grid}>
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
        </div>
    )
}

export default dataResponse;