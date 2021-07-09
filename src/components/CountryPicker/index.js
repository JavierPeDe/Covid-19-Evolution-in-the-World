import React, { Component, useState, useEffect } from "react";
import axios from 'axios';



export const CountryPicker = () => {
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
                    console.log(e.target.value)
                }}>
                    {countries.map((country, i) => (
                        <option key={i} value={country.code}>{country.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

