import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import breakpoint from "./css/breakpoints"
import Header from './header/header'
import Footer from './footer'


const navigationQuery = graphql`
{
  allPrismicNavigation {
    edges {
      node {
        data {
          navigation_links {
            label
            link {
              uid
            }
          }
        }
      }
    }
  }
}
`



const Layout = ({children}) => {


  // const navigationData = data.allPrismicNavigation.edges[0].node.data.navigation_links
  // console.log(navigationData)

  return (
    <StyledLayout>
    
      <StaticQuery
        query={navigationQuery}
        render={(data) => {
          console.log(data)
          return data.allPrismicNavigation.edges[0].node.data.navigation_links.map((link) => {
            return (
              <NavLink key={link.link.uid}>
                <Link to={`/${link.link.uid}`}>{link.label}</Link>
              </NavLink>
            )
          })
          
        }}
      />
      


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