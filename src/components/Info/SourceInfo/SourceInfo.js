import React from 'react';
import { Grid } from '@material-ui/core';
import style from "../../Info/index.module.css";

export const SourceInfo = ({ title, source, source2, source3, link, link2, link3 }) => {

    return (
        <React.Fragment>
            <Grid container direction="row" justify="center" alignItems="center" >
                <Grid item xs={12} md={10} className={style.mainGrid}>
                    <div className={style.title}>
                        <h3>{title}</h3>
                    </div>
                    <div className={style.contentBox}>
                        <p><strong>Source:</strong></p>
                        <a className={style.links} href={source} target="_blank" rel="noreferrer">{link}</a>
                        <br></br>
                        <a className={style.links} href={source2} target="_blank" rel="noreferrer">{link2}</a>
                    </div>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}