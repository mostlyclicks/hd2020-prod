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
                site_section
                label
                link {
                  uid
                }
              }
            }
            id
          }
        }
        group(field: id) {
          edges {
            node {
              data {
                office_subnav {
                  office_label
                  office_link {
                    uid
                  }
                }
              }
            }
          }
          field
          fieldValue
        }
      }
    }
  `)

  const mainNav = data.allPrismicNavigation.edges[0].node.data.navigation_links
  const subNav = data.allPrismicNavigation.group[0].edges[0].node.data.office_subnav

  return (
    <StyledMainNavigation>
      <ul>
      {mainNav.map((link) => {
        return (
          <li><Link to={`/${link.link.uid}`}>{link.label}</Link>
            {/* 
            {link.label == 'Our Office' && 
              <ul>
                {subNav.map((link) => {
                  return (
                    <li><Link to={`/${link.office_link.uid}`}>{link.office_label}</Link></li>
                  )

                })}

              </ul>
            }*/}
          </li>
        )
      })}
      </ul>
      
      
    </StyledMainNavigation>
  )
}

export default MainNavigation

const StyledMainNavigation = styled.nav`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ul,li {padding:0;list-style:none;}
  
  ul {
    display:flex;
    width:50%;
    flex:1;
    justify-content:space-around;
    max-width:500px;
    
  }



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
    
    flex:4;
  }

  @media only screen and ${breakpoint.device.laptopL} {
    border:1px solid pink;
    flex:5;
  }

  @media only screen and ${breakpoint.device.desktop} {
    border:1px solid purple;
    flex:11;
  }


`