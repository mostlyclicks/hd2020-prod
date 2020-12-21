import React from 'react'
import styled from 'styled-components'
import colors from '../css/base-styles' 
import breakpoint from "../css/breakpoints"

const HomeHero = ({title, content, backgroundImage}) => {
  
  return (
    <HomeHeroWrapper backgroundImage={backgroundImage}>
      <div>
        <h1>{title}</h1>
        <h2>{content}</h2>
        <button>Get Started</button>
      </div>
    </HomeHeroWrapper>
  )
}

export default HomeHero

const HomeHeroWrapper = styled.section`
  height: 100vh;
  min-height:600px;
  background-image:url('${props => props.backgroundImage}');
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  
  display:flex;
  align-items:center;
  text-align:right;

  div {
    margin-top:200px;
    // border:1px solid blue;
    width:1200px;
    font-family:'Montserrat';
    max-width:1200px;
    margin:0 auto;
    h1 {
      color: ${colors.baseColors.mainPurple};
    }
    h2 {
      color: ${colors.baseColors.purpleGray};
      font-weight:400;
    }
    button {
      margin-top:2em;
      padding:0.65em 1.5em;
      border-radius:5px;
      background-color:${colors.baseColors.purpleGray};
      color:#fff;
      border:none;
      font-size:16px;
    }
  }

  @media only screen and ${breakpoint.device.mobileS} {
    div {text-align:center;}
    h1 {
      font-size:150%;
    }
    h2 {
      font-size:120%;
      padding:0 3em;
    }
  }
  @media only screen and ${breakpoint.device.mobileL} {
    
  }
  @media only screen and ${breakpoint.device.laptop} {
    div {
      max-width:80%;
      text-align:right;
    }
    h1 {font-size:180%;}
    h2 {padding:0;}
  }
`

