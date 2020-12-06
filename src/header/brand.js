import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/Logo_1016px_Wide_all_purple.png"
import styled from 'styled-components'
import breakpoint from "../css/breakpoints"

const Brand = () => {

  return (
    <StyledBrand>
      <Link to="/"><img src={logo} alt="Hulse Dental logo" /></Link>
    </StyledBrand>
  )
}

export default Brand


const StyledBrand = styled.div`
  
  display:flex;
  flex:1;
  @media only screen and ${breakpoint.device.mobileS} {
    border:1px solid red;
    img {width:400px;}
  }
  @media only screen and ${breakpoint.device.mobileL} {
    border:1px solid green;
    img {width:28%;}
  }
  @media only screen and ${breakpoint.device.laptop} {
    border:1px solid yellow;
    img {width:100%;}
  }
`
