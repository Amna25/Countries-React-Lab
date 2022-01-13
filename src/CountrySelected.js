import React from 'react'

const CountrySelected = ({countries, onCountrySelected}) => {

    const handleChange = function(event) {
        const chooseCountry = countries[event.target.value]
        onCountrySelected(chooseCountry)
    }

    const countryOptions = countries.map((country, index) => {
        return<option value={index} key={index}>{country.name.common}</option>

    })
    return (
        <select defaultValue="" onChange={handleChange}>
        <option value="" >Choose a Country</option>
        {countryOptions}
        </select>

    )
}

export default CountrySelected
