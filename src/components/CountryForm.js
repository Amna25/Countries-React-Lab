import React,{useState} from 'react'

const CountryForm = ({onCountrySubmit}) => {

    const [name, setName] = useState("")

    const handleName = (event) => {
        setName(event.target.name)
    }

    const handleCountrySubmit = (event) => {
        event.preventDefault();
        onCountrySubmit({
            name: name
        })

        setName("")
    }
    return (
        <form onSubmit={handleCountrySubmit}>
            <input 
            type ="text"
            placeholder="Country name"
            value = {name}
            onChange={handleName}
            />
            <input
            type = "submit"
            value = "post"
            />
        </form>
    )
}

export default CountryForm
