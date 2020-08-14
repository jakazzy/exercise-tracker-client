import React from 'react'

import './layout.styles.css'

const Layout = props => {
  return (
    <div className="container-box">
      <div className="divider"></div>
      {props.children}
    </div>
  )
}

export default Layout
