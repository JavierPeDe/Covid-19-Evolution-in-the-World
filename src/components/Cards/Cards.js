import React from "react";
import useCurrentDayDataByCountry from "../../hooks";
import DataResponse from "../DataContent/Data";

const Cards = () => {
    const { response, loading, error } = useCurrentDayDataByCountry();
    return (
        <div>
            <h1>Cards</h1>
            {response.map((response, index) => <DataResponse key={index} value={response} />)}
            {loading}
            {error}
        </div>
    )
}

export default Cards;