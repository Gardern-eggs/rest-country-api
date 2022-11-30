import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../country.css'



const Country=(props)=> {
  const {name} = useParams()



//all array from appjs
let countries = props.arrayData;

let countryDetail = countries.filter(country => country.name === name)[0];

const borders = (arr) => {
    return arr.map(code => {
       const borderCountry = countries.filter(country => country.alpha3Code === code)[0];
        return <div className="borders" key={borderCountry.numericCode}>
          <ul className='borderLists'>
            <li>{borderCountry.name}</li>
          </ul></div>

    })
}

let borderCountries = Object.keys(countryDetail).includes('borders') ? borders(countryDetail.borders) : `${name} is an Island`;

//console.log(countryDetail.borders)

return(
  <>
      <section className='country'>
        <Link to="/" className='btn-back'>
          <i className="fa fa-arrow-left">Back</i>
        </Link>

        <div className='selectcountryBox' key={countryDetail.name}>
                <div className='imgContainer'>
                  <img src={countryDetail.flags.png} alt='flag'/>
                </div>
                <div className='countryBoxDetails'>
                  <div className='mainDetails'>
                  
                    <h3>{name}</h3>
                      <h4>Native Name: <span>{countryDetail.nativeName}</span></h4>
                      <h4>Population: <span>{countryDetail.population}</span></h4>
                      <h4>Region: <span>{countryDetail.region}</span></h4>
                      <h4>Sub Region: <span>{countryDetail.subregion}</span></h4>
                      <h4>Capital: <span>{countryDetail.capital}</span></h4>
                  </div>

                  <div id="otherDetails">
                      <h4>Top Level Domain: <span>{countryDetail.topLevelDomain}</span></h4>
                      <h4>Currency: <span>{countryDetail.currencies[0].name}</span></h4>
                      <h4>Languages: <span>{countryDetail.languages.map(lang => <span className="lang">{lang.name.toString()}</span>)}</span></h4>
                  </div>
            
                  <div className='borders'>
                      <h4>Border Countries:</h4>
                          <div className='borderList'>
                              {borderCountries }     
                          </div>
                  </div>       
            
                </div>  
              
        </div>

      </section>
  
  </>
)
}



  
export default Country