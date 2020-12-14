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
`

const IntroMessageWrapper = styled.div`
  display:flex;

  
  width:65%;
  height:70vh;
  background-color:rgba(0,0,0,.4);
  box-shadow:5px,15px rgba(0,0,0,.2);

  
`

const IntroMessageText = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:67%;
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
  width:33%;

`