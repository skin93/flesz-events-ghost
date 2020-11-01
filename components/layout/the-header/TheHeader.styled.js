import styled from 'styled-components'
import { device } from '../../../constants/device'

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  position: sticky;
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
  height: 50px;
  width: 100px;
  overflow: hidden;
  padding: 0 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light};
  font-weight: bold;
`

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  height: 50px;
  width: 100px;
  overflow: hidden;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
`
