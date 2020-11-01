import styled from 'styled-components'
import { device } from '../../../constants/device'

export const StyledNavToggler = styled.button`
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
