import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SigninSignup from './pages/signin-signup/signin-signup.component'
import SigninPage from './pages/signin-page/signin-page.component'

import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup" component={SigninSignup} />
        <Route exact path="/login" component={SigninPage} />
      </Switch>
    </div>
  )
}

export default App
