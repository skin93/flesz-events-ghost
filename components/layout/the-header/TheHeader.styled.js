import styled from 'styled-components'
import { device } from '../../../constants/device'

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
`

export const Navbar = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 15px;
  min-width: 250px;
  overflow: hidden;
  flex-wrap: wrap;

  @media ${device.tablet} {
    max-width: 1440px;
  }
`

export const NavbarBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 15px;
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
  font-size: 1rem;
  padding: 15px;
  margin: 30px 0;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.2s ease-in-out;

  @media ${device.tablet} {
    font-size: 1rem;
    margin: 0;
    padding: 15px;
  }
`
