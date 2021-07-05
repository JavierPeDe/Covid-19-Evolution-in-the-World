import React from "react";

const dataResponse = (props) => {
    return (
        <React.Fragment>
            <p>{props.value.data.total.today_confirmed}</p>
            <p>{props.value.data.total.today_recovered}</p>
            <p>{props.value.data.total.today_deaths}</p>
        </React.Fragment>
    )
}

export default dataResponse;