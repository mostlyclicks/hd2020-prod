import React from 'react'
import styled from 'styled-components'
import colors from '../css/base-styles'
import breakpoint from "../css/breakpoints"


const HomeIntroMessage = ({heading, content, backgroundImage}) => {

  return (
    <StyledIntroMessage>
      <IntroMessageWrapper>    
        <IntroMessageText>
        <h2>{heading}</h2>
        <div>{content}</div>
        </IntroMessageText>
        <IntroImage backgroundImage={backgroundImage}/>
      </IntroMessageWrapper>
    </StyledIntroMessage>
  )
}

export default HomeIntroMessage


const StyledIntroMessage = styled.div`
  display:flex;
  height:90vh;
  background-color:${colors.baseColors.mediumGray};
  align-items:center;
  justify-content:center;
  @media only screen and ${breakpoint.device.tablet} {
    //border:1px solid black;
    height:80vh;
  }
  @media only screen and ${breakpoint.device.laptopL} {
    height:70vh;
  }
`

const IntroMessageWrapper = styled.div`
  display:flex;
  width:100%;
  height:90vh;
  background-color:${colors.baseColors.darkGray};

  @media only screen and ${breakpoint.device.mobileL} {
    //border:1px solid red;
    div 
      flex:3;
      {h2 {
      font-size:130%;
      line-height:1.25em;
    }}
  }

  @media only screen and ${breakpoint.device.tablet} {
    //border:1px solid black;
    margin-top:-10vh;
    width:80%;
    height:80vh;
    box-shadow:0px 10px 70px rgba(0,0,0,.3);
  }

  @media only screen and ${breakpoint.device.laptop} {
    //border:1px solid yellow;
    div {flex:2;}    
  }

  @media only screen and ${breakpoint.device.laptopL} {
    //border:1px solid pink;
    width:70%;
    height:70vh;
    margin-top:-20vh;
  }
`

const IntroMessageText = styled.div`
  display:flex;
  flex-direction:column;
  flex:3;
  padding:2em;
  align-self:center;
  font-family:'Montserrat';
  font-weight:400;
  color:#fff;
  h2 {
    font-weight:400;
    font-family:'Montserrat';
  }
`


const IntroImage = styled.div`
  background-image:url('${props => props.backgroundImage}');
  background-size:cover;
  flex:1;
  @media only screen and ${breakpoint.device.mobileL} {
    background-position-x:-140px;
  }
`


