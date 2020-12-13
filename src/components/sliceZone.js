import React from 'react'
import HomeHero from './hero'


const SliceZone = ({body}) => {

  return (
    <>
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
        } else {
          return (
            <h1>Otherslice</h1>
          ) 
        }
      })}
    </>
  )
}

export default SliceZone

   