import React from "react";
import { useCurrentDayDataByCountry } from "../../hooks";
import DataResponse from "../DataContent/Data";
//import styles from "../../App.module.css";

const Cards = () => {
    const { response, loading, error } = useCurrentDayDataByCountry('Spain');

    return (
        <div>
            <DataResponse value={loading ? [0, 0, 0, '', ''] : response} />
        </div>
    )
}

export default Cards;