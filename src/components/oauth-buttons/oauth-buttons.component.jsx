import React from 'react'
import { Button } from 'react-bootstrap'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import './oauth-buttons.style.css'

export const FacebookButton = () => {
  const _handleSignInFacebook = () => {
    // Authenticate using via passport api in the backend
    // Open facebook login page
    window.open(`${process.env.REACT_APP_BASE_URL}/auth/facebook`, '_self')
  }

  return (
    <Button
      onClick={_handleSignInFacebook}
      className="social-button btn btn-primary shadow">
      {' '}
      <FaFacebookSquare /> Sign in with Facebook
    </Button>
  )
}

export const GoogleButton = () => {
  const _handleSignInGoogle = () => {
    // Authenticate using via passport api in the backend
    // Open facebook login page
    window.open(`${process.env.REACT_APP_BASE_URL}/auth/google`, '_self')
  }

  return (
    <Button
      onClick={_handleSignInGoogle}
      className="social-button google-button btn btn-light shadow">
      {' '}
      <FcGoogle /> Sign in with Google
    </Button>
  )
}
