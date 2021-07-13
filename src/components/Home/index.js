import React from 'react'
import { useState } from 'react'
import { CountryPicker } from './CountryPicker'
import { useDataByCountry } from '../../hooks'
import { GraphicsContainer } from './GraphicsContainer'
import { DataResponse } from './DataResponse'
import imgLoading from '../../assets/img/careers-loading.gif'
export const Home = () =>{
    const [country, setCountry] = useState()
    const handleInputChange = evt =>{
        setCountry(evt.target.value)
        
    }
    const {response, responseRange,  loading } =useDataByCountry(country)
    console.log(response)
    return (
        <div>
            <CountryPicker handleInputChange={handleInputChange} />
            {loading? <img src={imgLoading} /> :<DataResponse  confirmed={response.confirmed} deaths={response.deaths} recovered={response.recovered} date={response.date} source={response.source} />}
            <GraphicsContainer responseRange={responseRange} loading={loading} />
        </div>
    )

}