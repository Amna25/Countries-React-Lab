import React from 'react'
import CountriesContainer from '../containers/CountriesContainer';

const CountryDetails = ({country}) => {

     
    return (
        <div className="country-detail">
        {console.log(country)}
         <h3>{country.name}</h3>
        <img src = {country.flags['png']} />
            
        </div>
    )
}

export default CountryDetails;
