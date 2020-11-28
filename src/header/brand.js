import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/HulseDentalLogo2016.png"

const Brand = () => {

  return (
    <>
      <Link to="/"><img src={logo} alt="Hulse Dental logo" /></Link>
    </>
  )
}

export default Brand

