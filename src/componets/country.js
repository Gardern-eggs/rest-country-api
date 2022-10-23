import React, {useState,useEffect}from 'react';
import { Link, useParams} from 'react-router-dom';
import '../country.css'
const url= 'https://restcountries.com/v2/name/'
const Country = () => {
  // to set country info state
  const [country,setCountry]= useState([])

  //check country name and display that data
  const {name}=useParams()
  //fetch data from url{rest-name then join to the selected flag}
  const fetchCountryData =async ()=>{
    const response = await fetch( `${url}${name}`)
    const country = await response.json()
      setCountry(country)
    
    
  }
  useEffect(()=>{ 
    fetchCountryData();
    },[]) 
  return (
    <>
    
      <div className='country'>
          <div className='btn-back'>
            <Link to='/' className='btn'><i className='fa fa-arrow-left' > Back </i></Link>
          </div>
        {country.map((c)=>{
          
          const {numericCode, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders}=c

          return(
            <article key={numericCode}>
              <div className='selectcountryBox'>
                <div className='imgContainer'>
                  <img src={flag}/>
                </div>     
                <div className='countryBoxDetails'>
                 
                  <div className='mainDetails'>
                  <h3> {name}</h3>
                      <h4>Native name: <span>{nativeName}</span></h4>
                      <h4>Population: <span>{population}</span></h4>
                      <h4>Region: <span>{region}</span></h4>
                      <h4>Sub Region: <span>{subregion}</span></h4>
                      <h4>Capital: <span>{capital}</span></h4>
                  </div>
                 <div className='otherDetails'>
                    <h4>Top Level Domain: <span>{topLevelDomain}</span></h4>
{/* since the currency and language were objects the .name property accesses the name of the variable */}
                      <h4>Currencies: <span>{currencies[0].name}</span></h4>
                      <h4>Languages: <span>{languages[0].name}</span></h4>
                  </div>
                  <div className='borders'>
                    <h4>Border Countries: </h4> 
                    <div className='borderList'>
                      {borders.map((border)=>{
                        return (
                          <ul key={border}><li>{border}</li></ul>
                        )
                      })}
                    </div>
                  </div>
                  
                      
                  
                  </div>         
               </div>
            </article>


          )

        })}
      </div>
    </>
  )
}
export default Country