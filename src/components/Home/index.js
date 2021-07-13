import React from 'react'
import { useState } from 'react'
import { CountryPicker } from './CountryPicker'
import { useDataByCountry } from '../../hooks'
import { GraphicsContainer } from './GraphicsContainer'
import { DataResponse } from './DataResponse'
export const Home = () => {
    const [country, setCountry] = useState()

    const handleInputChange = evt => {
        setCountry(evt.target.value)
        //console.log(evt.target.value)
    }

    const { response, responseRange, loading } = useDataByCountry(country)
    return (
        <div>
            <CountryPicker handleInputChange={handleInputChange} />
            <DataResponse value={loading ? [0, 0, 0, '', ''] : response} />
            <GraphicsContainer responseRange={responseRange} loading={loading} />
        </div>
    )

}