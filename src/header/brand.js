import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/Logo_1016px_Wide_all_purple.png"
import styled from 'styled-components'

const Brand = () => {

  return (
    <StyledBrand>
      <Link to="/"><img src={logo} alt="Hulse Dental logo" /></Link>
    </StyledBrand>
  )
}

export default Brand


const StyledBrand = styled.div`
  img {width:100%;}
  display:flex;
  flex:1;
`
