import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const AuthGuard = ({ component: Component, ...rest }) => {
  const {
    auth: { isAuthenticated, token }
  } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={props =>
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
