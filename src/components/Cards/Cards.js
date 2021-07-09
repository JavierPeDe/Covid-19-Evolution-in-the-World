import React from "react";
import { useDataByCountry } from "../../hooks";
import DataResponse from "../DataContent/Data";
//import styles from "../../App.module.css";

const Cards = () => {
    const { response, loading } = useDataByCountry('ES');

    return (
        <div>
            <DataResponse value={loading ? [0, 0, 0, '', ''] : response} />
        </div>
    )
}

export default Cards;