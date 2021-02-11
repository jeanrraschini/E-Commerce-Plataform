import React from 'react'
import Homepage from './containers/Home/Homepage'
import ShopPage from './containers/Shop/ShopPage'
import  { Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;