import React from 'react'
import Country from './Country'

const CountriesList = ({countries}) => {

    const countriesNodes = countries.map((country, index) => {
        return(
            <Country name={country.name.common} population={country['population']} key={index}/>
        )
    })
    return (
        <div>
            {countriesNodes}

        </div>
    )
}

export default CountriesList
