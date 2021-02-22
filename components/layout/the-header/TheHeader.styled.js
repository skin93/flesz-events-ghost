import styled from 'styled-components'
import { device } from '../../../constants/device'

export const Header = styled.header`
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  background-color: none;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
`

export const Navbar = styled.nav`
  display: flex;
  margin: 0 auto;
  padding: 0 30px;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1200px;
`

export const NavbarBrand = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: auto;
`

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  text-transform: uppercase;
  font-weight: bold;

  @media ${device.tablet} {
    margin: 0;
    padding: 15px;
  }
`
