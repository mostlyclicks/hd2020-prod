import React from 'react'
import styled from 'styled-components'

const ProgressNotes = () => {

  return (
    <StyledProgressNotes>
      <h3>Todo: Prismic Data Connection: 11/16 - 11/23 </h3>
      <ul>
        <li><strike>Create Layout</strike></li>
        <li><strike>Add Layout to index</strike></li>
        <li><strike>Add Helmet</strike></li>
        <li><strike>Add Helmet to Layout</strike></li>
        <li><strike>Add Layout to Page template</strike></li>
        <li><strike>Prismic - create home single</strike></li>
        <li><strike>Push to hosting</strike></li>
        <li><strike>Add Hero SliceZone to Homepage</strike></li>
        <li>Add Conditional to choose sliceZone type</li>
      </ul>

      <h3>Todo: Prismic SliceZone Homepage 11/23 - 11/30</h3>
      <ul>
        <li>Prismic: Add Intro text</li>
        <li>Prismic: Add Service slices</li>
        <li>Prismic: Add Get started slice</li>
        <li>Start Home Design</li>
        <li>Start Nav</li>
        <li>Start Footer</li>
      </ul>
    
    </StyledProgressNotes>
  )
}

export default ProgressNotes

const StyledProgressNotes = styled.div`
  background-color:#f1f1f1;
  color:#383838;
  padding:1em;
  margin:1em;
`