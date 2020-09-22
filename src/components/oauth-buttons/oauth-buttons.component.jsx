import React from 'react'
import { Button } from 'react-bootstrap'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
// import { oauth } from '../../api/api'

import './oauth-buttons.style.css'

export const FacebookButton = ({ text, route }) => {
  const _handleSignInFacebook = async (route, media) => {
    // Authenticate using via passport api in the backend
    // Open facebook login page
    // await oauth(route, media)
    window.open(`${process.env.REACT_APP_BASE_URL}/${route}/facebook`, '_self')
  }

  return (
    <Button
      onClick={() => _handleSignInFacebook(route, 'facebook')}
      className="social-button btn btn-primary shadow">
      {' '}
      <FaFacebookSquare /> {text}
    </Button>
  )
}

export const GoogleButton = ({ text, route }) => {
  const _handleSignInGoogle = async (route, media) => {
    // Authenticate using via passport api in the backend
    // Open facebook login page
    // await oauth(route, media)
    window.open(`${process.env.REACT_APP_BASE_URL}/${route}/google`, '_self')
  }

  return (
    <Button
      onClick={() => _handleSignInGoogle(route, 'google')}
      className="social-button google-button btn btn-light shadow">
      {' '}
      <FcGoogle /> {text}
    </Button>
  )
}
