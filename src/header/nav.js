import React from 'react'
import styled from "styled-components"
import breakpoint from "../css/breakpoints"


const MainNavigation = () => {

  return (
    <StyledMainNavigation>
      <h3>Main Navigation goes here</h3>
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