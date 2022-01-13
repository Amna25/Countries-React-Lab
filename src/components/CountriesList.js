import React from 'react'
import Country from './Country'

const CountriesList = ({countries, onCountryClick}) => {

    const countriesNodes = countries.map((country, index) => {
        return(
            <Country name={country.name} population={country['population']} key={index} country={country}
                onCountryClick={onCountryClick}
            />
        )
    })
    return (
        <div>
            {countriesNodes}

        </div>
    )
}

export default CountriesList
