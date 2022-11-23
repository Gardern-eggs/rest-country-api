
import React, {useState,useEffect}from 'react';
import { Link, useParams} from 'react-router-dom';
import '../country.css'



const url= 'https://restcountries.com/v2/name/'
const Country = (props) => {
  // to set country info state
  const [country,setCountry]= useState([])
  // const [borderName,setBorderName]=useState([])
   //check country name and display that data
   const {name}=useParams()
  //   const fetchAlphacode=async(code)=>{
  //     const response=await fetch(`https://restcountries.com/v2/alpha/#${code}`)
  //     const data=await response.json()
  //     setBorderName(prev=>[...prev,data])
    
  //   }
    
  //   const borderloop=(array)=>{
  //     array.forEach(element => {
  //       fetchAlphacode(element)
  //     });
  //   }
    
  //   useEffect(()=>{
  //     borderloop(borders)
  //   })
 
  //fetch data from url{rest-name then join to the selected flag}
  
  useEffect(()=>{ 
    const fetchCountryData =async ()=>{
      const response = await fetch( `${url}${name}`)
      const country = await response.json()
        setCountry(country)
    }
    fetchCountryData();
    },[name]) 
    
  return (
    <>
      <div className='country'>
          <div className='btn-back'>
            <Link to='/' ><i className='fa fa-arrow-left' >  Back </i></Link>
          </div>
        {country.map((c)=>{          
          const {numericCode, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders}=c
         

          return(
            // <article >
              <div className='selectcountryBox'key={numericCode}>
                <div className='imgContainer'>
                  <img src={flag} alt='country'/>
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
                      {/* the borders?.map  checks if the country has borders or not before */}

                      {borders?.map((border)=>{
                        return (
                          <Link to={`/countries/${border}`}>
                          <ul key={border}><li>{border}</li></ul>
                          </Link>
                        )                      
                      })}
                    </div>
                  </div>
                  
                      
                  
                  </div>         
               </div>
            // </article>


          )

        })}
      </div>
    </>
  )
}
export default Country