import React from 'react'
// import { graphql, Link, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import breakpoint from "./css/breakpoints"
import Header from './header/header'
import Footer from './footer'

const message = "hello"




const Layout = ({children}) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  )
}

export default Layout


const StyledLayout = styled.div`
  @media only screen and ${breakpoint.device.mobileS} {
    border:1px solid red;
  }

  @media only screen and ${breakpoint.device.mobileM} {
    border:1px solid blue;
  }

  @media only screen and ${breakpoint.device.mobileL} {
    border:1px solid green;
  }

  @media only screen and ${breakpoint.device.tablet} {
    border:1px solid black;
  }

  @media only screen and ${breakpoint.device.laptop} {
    border:1px solid yellow;
  }

  @media only screen and ${breakpoint.device.laptopL} {
    border:1px solid pink;
  }

  @media only screen and ${breakpoint.device.desktop} {
    border:1px solid purple;
  }
`

const NavLink = styled.div`

`