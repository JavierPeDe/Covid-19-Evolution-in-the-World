import React, { useState, useEffect } from "react";
import styles from "./selector.module.css";
import axios from 'axios';



export const CountryPicker = ({ handleInputChange }) => {
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
        <div className={styles.fix}>
            <div>
                <select name="countries" className={styles.selector} onChange={(e) => {
                    handleInputChange(e)
                }}>
                   
                    {countries.map((country, i) => (
                        <option key={i} value={country.code}>{country.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

