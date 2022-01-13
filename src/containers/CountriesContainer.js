import React,{useState, useEffect} from 'react'
import CountriesList from '../components/CountriesList'

const CountriesContainer = () => {

    const [countries, setCountries] = useState([])

    useEffect(() =>{
        getCountry();   
    }, [])

    const getCountry = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((countries) => setCountries(countries))
    }


    return (
        <div>
        <h2>CountriesList</h2>
        <CountriesList countries={countries}/>
            
        </div>
    )
}

export default CountriesContainer
