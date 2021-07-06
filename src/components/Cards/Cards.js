import React from "react";
import useCurrentDayDataByCountry from "../../hooks";
import DataResponse from "../DataContent/Data";
//import styles from "../../App.module.css";

const Cards = () => {
    const { response, loading, error } = useCurrentDayDataByCountry();
    return (
        <div>
            {response.map((response, index) => <DataResponse key={index} value={response} />)}
            {loading}
            {error}
        </div>
    )
}

export default Cards;