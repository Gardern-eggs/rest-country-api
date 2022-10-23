import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Countries from './componets/countries';
import {Country} from './componets/country';
import { Filter } from './componets/filter';
import Header from './componets/header';


// to render countries components
function App() {
  return (
    <Router>
      <Header /> 
        <Route exact path='/'>
          <Filter/>
          <Countries />
        </Route>
        <Route path='/countries/:name' children={<Country />}><Country/></Route> 
    </Router>
  );
}

export default App;
