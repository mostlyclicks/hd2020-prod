import React from 'react'
import styled from 'styled-components'
import colors from './css/base-styles'
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Copyright from "./components/utility/copyright"

const Footer = () => {

  const date = new Date().getFullYear
  console.log(date)


  return (
    <StyledFooter>
      <div>
        Hulse Dental<br/>
        1840 East Main Street<br/>
        Onalaska, WI 54650<br/>
        (608) 783-1306<br/>
        <a href="mailto:kurthulsdental@gmail.com">kurthulsdental@gmail.com</a>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Our Office</li>
          <li>Office Hours & Directions</li>
          <li>New Patient Forms</li>
          <li>Services</li>
          <li>Dr. Kurt Hulse</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <p><span>Connect with us!</span>
        <a href="#"><FaFacebook size={30} /></a>
        <a href="#"><FaInstagram size={30} /></a>
        </p>
         <Copyright companyName="Hulse Dental" copyRightColor="#000000" />
      </div>
      
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.div`
display:flex;
justify-content:space-around;
height:auto;
width:100%;
background-color:${colors.baseColors.darkGray};
color:#ffffff;



div {  
  flex:2;
  padding:2em 2em;
  a {
    color:rgba(255,255,255,.6);
    text-decoration:none;
    :hover {color:#ffffff;}
  }
  ul {
    display:flex;
    flex-wrap:wrap;
    margin:0;
    padding:0;
    li {
      width:50%;  
      list-style:none;
      margin:0;
    }
  }
}

div:nth-child(2) {
  flex:3;
}

div:nth-child(3) {
  flex:2;
  flex-direction:row;
  
  justify-content:flex-end;
  text-align:center;
  p {
    display:flex;
    align-self:center;
    justify-content:center;
  }
  a {padding:0 .4em;}
  span {
    margin-right:.6em;
  }
}


  

`