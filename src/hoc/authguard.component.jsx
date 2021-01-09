import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const AuthGuard = ({ component: Component, ...rest }) => {
  const {
    auth: { isAuthenticated, token }
  } = useContext(AuthContext)
  console.log(isAuthenticated, token, '^^^^^^^^^^^^^^^^^^^^^^^^^^')
  return (
    <Route
      {...rest}
      render={props =>
        // true
        isAuthenticated && token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default AuthGuard
