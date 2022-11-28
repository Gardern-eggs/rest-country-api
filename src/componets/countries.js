import React from 'react';
import { Link } from 'react-router-dom';



const Countries = (props) => {
    
    // retreving data from apps.js
    let countries=props.arrayData;


    
  return (
    <>
    {/* filter component stucture */}
    <div className='filterbar'>
        <form className='formControl'>
      <div className='search'>
        <i className="fa fa-search"> <input type="search" id="search" placeholder='Search for a country…'  /></i>
        </div>
        </form>
        
        <div className='option'>
            <select name='select' id='select' >
            <option value=""defaultValue >Filter by Region </option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>Americas</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
    </div>
    {/* end of filter component */}
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