import React from 'react'
import styled from 'styled-components'

const Copyright = ({companyName, copyRightColor}) => {

  return (
    <StyledCopyright copyRightColor={copyRightColor}>
      <small>Copyright © {(new Date().getFullYear())} {companyName} - All rights reserved.</small>
    </StyledCopyright>
  )

}

export default Copyright

const StyledCopyright = styled.span`
  color:'${props => props.copyRightColor}';
`

