import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Filter } from './filter';

const url='https://restcountries.com/v2/all';


const Countries = () => {
    const [countries,setCountries]= useState([])
    //get data from url {rest-countries.v2}
    const fetchCountryData = async()=> {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
            //to see elements been displayed on the dom
            // console.log(countries)
            console.log(countries)
        }
//what to do with the fetched data and controll errors
    useEffect(()=>{     
        try{
        fetchCountryData()       
        }catch(error){
            console.log(error)
        }
    },[]
)



    
  return (
    <>
      <Filter setCountries={setCountries} fetchCountryData={fetchCountryData}/>
        <div className='display'>
            {countries.map((country)=>{
    //data requested to complete project
                const { numericCode,flag, name, population, region, capital, }= country

    //to display pulled data request
                return(
                <article key={numericCode}> 
                    <div className='countryBox '>
                           <Link to={`/countries/${name}`}>
                       <div className='img-container'>
                            <img src={flag} alt='Country flag'/>
                        </div>
                        </Link>
                       <div className='countryBoxDetail'>
                       <h3 className='countryName'> {name}</h3>
                            <h4>Capital: <span>{capital}</span></h4>
                            <h4>Population: <span>{population}</span></h4>
                            <h4>Region: <span>{region }</span></h4>
                            
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