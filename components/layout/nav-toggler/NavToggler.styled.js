import styled from 'styled-components'
import { device } from '../../../constants/device'

export const StyledNavToggler = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  height: auto;
  width: auto;
  padding: 15px;
  z-index: 100;

  &:focus {
    outline: none;
  }

  @media ${device.tablet} {
    display: none;
  }
`
