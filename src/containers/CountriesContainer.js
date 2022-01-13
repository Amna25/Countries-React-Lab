import React,{useState, useEffect} from 'react'
import CountriesList from '../components/CountriesList'
import CountryDetails from '../components/CountryDetails'
import CountryForm from '../components/CountryForm'
import FavCountryList from '../components/FavCountryList'
import CountrySelected from '../CountrySelected'

const CountriesContainer = () => {

    const [countries, setCountries] = useState([])
    const [selectCountry,  setSelectCountry] = useState(null)
    const [favouriteCountry, setFavouriteCountry] = useState("")


    useEffect(() =>{
        getCountry();   
    }, [])

    const getCountry = () => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then((countries) => setCountries(countries))
    }

    const onCountryClick = function (country){
        setSelectCountry(country)
    }

    // const onCountrySelected = function (country){
    //     setSelectCountry(country)
    // }

    const addCountry = (submittedCountry) => {
        submittedCountry.id = Date.now();
        const updatedCountry = [...favouriteCountry, submittedCountry]
        setFavouriteCountry(updatedCountry) 
    }


    return (
        <div id= "countries-container">
        <CountriesList countries={countries} onCountryClick= {onCountryClick}/>
        {/* <CountrySelected  countries={countries} onCountrySelected={onCountrySelected}/> */}
        {selectCountry ? <CountryDetails country={selectCountry} /> : null}
        <FavCountryList countries={countries}/>
        <CountryForm onCountryClick={(countries) => addCountry(countries}/>      
        </div>
    )
}

export default CountriesContainer;
