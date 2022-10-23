import React, {useState,useEffect}from 'react';
import { Link, useParams} from 'react-router-dom';

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
      console.log(country)
    
  }
  useEffect(()=>{ 
    fetchCountryData();
    },[]) 
  return (
    <>
    <div className='btn-back'>
      <Link to='/' className='btn'><i className='fa fa-arrow-left' > Back</i></Link>
    </div>
      <h1>country</h1>
    </>
  )
}
export default Country