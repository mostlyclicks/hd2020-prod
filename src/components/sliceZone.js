import React from 'react'
import HomeHero from './hero'
import HomeIntroMessage from './home-intro-message'
import styled from 'styled-components'


const SliceZone = ({body}) => {

  return (
    <StyledSliceZone>
      {body.map((bodyContent) => {
        if(bodyContent.slice_type === 'hero') {
          return (
             <HomeHero
              title={bodyContent.primary.hero_title[0].text}
              content={bodyContent.primary.hero_content}
              sliceZoneType={bodyContent.slice_type}
              backgroundImage={bodyContent.primary.hero_background_image.url}
             />
          )
        } else if(bodyContent.slice_type === 'intro_message'){
          return (
            <HomeIntroMessage 
              heading={bodyContent.primary.text_block[0].text}
              content={bodyContent.primary.text_block[1].text}
              backgroundImage={bodyContent.primary.intro_image.url}
            />
          ) 
        }
      })}
    </StyledSliceZone>
  )
}

export default SliceZone

const StyledSliceZone = styled.div`
  display:flex;
  flex-direction:column;

  
`

   