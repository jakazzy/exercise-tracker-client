import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignupPage from './pages/signup-page/signup-page.component'
import SigninPage from './pages/signin-page/signin-page.component'

import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={SigninPage} />
      </Switch>
    </div>
  )
}

export default App
