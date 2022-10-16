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
            const { id }= country

            return<article key={id}> country</article>
           
        })}
    </>
  )
}

export default Countries