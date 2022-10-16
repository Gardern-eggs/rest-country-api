import React,{useState, useEffect} from 'react';

const url='https://restcountries.com/v2/all';
const Countries = () => {
    const [countries,setCountries]= useState([])

    //get data from url {rest-countries.v2}
    const fetchCountryData = async()=> {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
            console.log(countries)
        }
//what to do with the fetched data
    useEffect(()=>{     
        fetchCountryData()       
    },[]
)

  return (
    <>
        {countries.map((country)=>{
            //data requested to complete project
            const { numericCode,flag, name, population, region, capital, }= country

            return(
            <article key={numericCode}> 
                <img src={flag}/>
                <h3> {name}</h3>
                <h4>Population: {population}</h4>
                <h4>Region: {region }</h4>
                <h4>Capital:{capital}</h4>
            </article>
            )
           
        })}
    </>
  )
}

export default Countries