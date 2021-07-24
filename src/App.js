import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/Navbar'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Offers from './pages/Offers';
import Subscribe from './pages/Subscribe';
import ClientInsert from './pages/ClientInsert';
import ProductInsert from './pages/ProductInsert';
import * as D from './Data.json'

function App() {

  useEffect(()=>{
    localStorage.setItem("products", JSON.stringify(D.products))
    localStorage.setItem("clients", JSON.stringify(D.clients))
    localStorage.setItem("emaillist", JSON.stringify(D.emaillist))
  },[])

  return (
    <>
    
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Offers}/>
          <Route path="/subscribe"  component={Subscribe}/>
          <Route path="/clientinsert"  component={ClientInsert}/>
          <Route path="/productinsert"  component={ProductInsert}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
