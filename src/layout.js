import React from 'react'
import Header from './header/header'
import Footer from './footer'

const Layout = ({children}) => {

  return (
    <div>
      <Header />
      <h1>This is the layout</h1>
      {children}
      <Footer />
    </div>
  )
}

export default Layout