import React from 'react'
import Country from './Country'

const FavCountryList = ({countries}) => {

    const countryNodes = countries.map((country) => {

        return <Country name={country.name} key={country.id}></Country>

    })
    return (
        <div>
        {countryNodes}
            
        </div>
    )
}

export default FavCountryList;
