import React, { Component, useState, useEffect } from "react";
import axios from 'axios';



export const CountryPicker = ({handleInputChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://corona-api.com/countries")
            .then((response) => {
                setCountries(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setCountries])
    return (
        <div>
            <div className="">
                <select name="countries" style={{ width: "200px" }} onChange={(e) => {
                    handleInputChange(e)
                }}>
                     <option hidden selected disabled value='ES'>Spain</option>
                    {countries.map((country, i) => (
                        <option key={i} value={country.code}>{country.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

