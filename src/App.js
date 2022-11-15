import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from './componets/countries';
import Country from './componets/country';
import Header from './componets/header';


// to render countries components
function App() {
  return (
    <Router>
      <>
            <Header /> 

        <Route exact path='/'>
        
          <Countries />
        </Route>
        <Route path='/countries/:name'>
          <Country />
        </Route> 
        </>
    </Router>
  );
}

export default App;
