import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignupPage from './pages/signup-page/signup-page.component'
import SigninPage from './pages/signin-page/signin-page.component'
import Confirmation from './pages/confirmation/confirmation.component'
import Dashboard from './pages/dashboard/dashboard.component'
import ResendToken from './pages/resend-token/resend-token.component'

import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={SigninPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/resend-token" component={ResendToken} />
        <Route exact path="/confirmation" component={Confirmation} />
      </Switch>
    </div>
  )
}

export default App
