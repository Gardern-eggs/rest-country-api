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
        <div className='display'>
            {countries.map((country)=>{
    //data requested to complete project
                const { numericCode,flag, name, population, region, capital, }= country

    //to display pulled data request
                return(
                <article key={numericCode}> 
                    <div className='countryBox'>
                        <img src={flag}/>
                        
                       <div className='countryBoxDetails'>
                       <h2> {name}</h2>
                            <h4>Population: <span>{population}</span></h4>
                            <h4>Region: <span>{region }</span></h4>
                            <h4>Capital: <span>{capital}</span></h4>
                       </div> 
                        
                    </div>
                </article>
                )
            
            })}
        </div>
    </>
  )
}

export default Countries