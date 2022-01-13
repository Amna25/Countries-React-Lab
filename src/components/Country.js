import React from 'react'

const Country = ({country, name, population, onCountryClick}) => {

    const handleClick = () => {
        onCountryClick(country)
    }
    return (
        <div>
        <h3 onClick={handleClick}>  {name}  has a population of {population} </h3>
        
            
        </div>
    )
}

export default Country
