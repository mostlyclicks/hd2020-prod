import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from "styled-components"
import breakpoint from "../css/breakpoints"


const MainNavigation = () => {

  const data = useStaticQuery(graphql`
    query {
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
  `)

  const mainNav = data.allPrismicNavigation.edges[0].node.data.navigation_links

  return (
    <StyledMainNavigation>
      <ul>
      {mainNav.map((link) => {
        return (
          <li><Link to={`/${link.link.uid}`}>{link.label}</Link></li>
        )
      })}
      </ul>
    </StyledMainNavigation>
  )
}

export default MainNavigation

const StyledMainNavigation = styled.nav`
  background-color:#cdcdcd;



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