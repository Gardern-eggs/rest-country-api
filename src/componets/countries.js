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

//to display pulled data request
            return(
            <article key={numericCode}> 
               <div>
                    <img src={flag}/>
                    <h3> {name}</h3>
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region }</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
                </div>
            </article>
            )
           
        })}
    </>
  )
}

export default Countries