import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from './componets/countries';
import Country from './componets/country';
import Header from './componets/header';
import axios from 'axios';
import { useState, useEffect } from 'react';


const url = 'https://restcountries.com/v2/all';

// to render countries components
function App() {

  const [countries,setCountries]=useState([])
  useEffect(()=>{ 
   
    axios.get(url).then((response)=>{
        const countries = response.data
        setCountries(countries)
 
    }).catch((err)=>console.log(err))

 
  }, []) 
  return (
    <Router>
      <>
            <Header /> 

        <Route exact path='/'>
        
          <Countries arrayData={countries}/>
        </Route>
        <Route path='/countries/:name'>
          <Country arrayData={countries} />
        </Route> 
        </>
    </Router>
  );
}

export default App;
