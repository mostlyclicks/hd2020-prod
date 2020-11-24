import React from 'react'

const SliceZone = ({body}) => {

  console.log(body.primary.hero_title[0].text)
  const heroTitle = body.primary.hero_title[0].text
  const heroSubtext = body.primary.hero_content
  const sliceZoneType = body.slice_type

  return (
    <>
      <h1>Hero Title: {heroTitle}</h1>
      <h2>Hero Subtext: {heroSubtext}</h2>
      <small>Slice Type: {sliceZoneType}</small>
    </>
  )
}

export default SliceZone