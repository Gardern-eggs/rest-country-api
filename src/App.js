import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Countries from './componets/countries';
import { Filter } from './componets/filter';
import Header from './componets/header';


// to render countries components
function App() {
  return (
    <>
      <Header /> 
      <Filter/>
      <Countries />
      
    </>
  );
}

export default App;
