import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { device } from '../../constants/device'

const StyledNavToggler = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  height: 50px;
  width: 100px;
  padding: 0 10px;
  z-index: 100;

  &:focus {
    outline: none;
  }

  @media ${device.tablet} {
    display: none;
  }
`

const NavToggler = ({ open, setOpen, ...props }) => {
  return (
    <StyledNavToggler open={open} onClick={() => setOpen(!open)} {...props}>
      <FontAwesomeIcon color='white' icon={faBars} />
    </StyledNavToggler>
  )
}

export default NavToggler
