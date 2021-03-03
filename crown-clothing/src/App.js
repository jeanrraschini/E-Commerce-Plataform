import React, { useState, useEffect } from 'react'
import Homepage from './containers/Home/Homepage'
import ShopPage from './containers/Shop/ShopPage'
import SignInAndSignUp from './containers/SignIn/SignInAndSignUp'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'
import './App.css'

const App = () => {
  const [user, setUser] = useState({
    currentUser: null
  })

  useEffect(() => {
      auth.onAuthStateChanged(user => {
      setUser({currentUser : user})
    })
  }, [])

  return (<>
    <Header currentUser={(user || {}).currentUser}/>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signIn' component={SignInAndSignUp} />
    </Switch>
  </>)
}

export default App;