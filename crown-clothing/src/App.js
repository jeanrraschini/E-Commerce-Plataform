import React from 'react'
import Homepage from './containers/Home/Homepage'
import ShopPage from './containers/Shop/ShopPage'
import Header from './components/Header'
import  { Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (<>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  </>)
}

export default App;