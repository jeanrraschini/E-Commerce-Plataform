import React from 'react'
import Homepage from './containers/Home/Homepage'
import  { Switch, Route } from 'react-router-dom'
import './App.css'

const HatsPage = () => <h1>Hats</h1>

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;