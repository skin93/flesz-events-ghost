import Link from 'next/link'
import React from 'react'
import BaseLink from '../UI/BaseLink'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../constants/device'

import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  background-color: var(--black);
  position: sticky;
`

const Navbar = styled.nav`
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

const NavbarBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: var(--light);
  height: 50px;
  width: 100px;
  overflow: hidden;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: bold;
`

const NavbarCollapse = styled.div`
  display: none;
  flex-direction: column;

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    /* max-width: 1024px; */
    overflow: hidden;
  }
`

const Nav = styled.ul`
  display: flex;
  flex: 5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: var(--light);
  height: 50px;
  width: 100px;
  overflow: hidden;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
`

const NavToggler = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  height: 50px;
  width: 100px;
  padding: 0 10px;

  &:focus {
    outline: none;
  }

  @media ${device.tablet} {
    display: none;
  }
`

const TheHeader = () => {
  return (
    <Header>
      <Navbar>
        <NavbarBrand>
          <Link href='/'>
            <a>Logo</a>
          </Link>
        </NavbarBrand>
        <NavToggler>
          <FontAwesomeIcon color='white' icon={faBars} />
        </NavToggler>
        <NavbarCollapse>
          <Nav>
            <NavItem>
              <BaseLink to='newsy' label='Newsy' />
            </NavItem>
            <NavItem>
              <BaseLink to='recenzje' label='Recenzje' />
            </NavItem>
            <NavItem>
              <BaseLink to='relacje' label='Relacje' />
            </NavItem>
            <NavItem>
              <BaseLink to='polecamy' label='Polecamy' />
            </NavItem>
            <NavItem>
              <BaseLink to='patronat' label='Patronat' />
            </NavItem>
            <NavItem>
              <Link href='https://facebook.com/flesz-events'>
                <a>
                  <FontAwesomeIcon color='white' icon={faFacebook} />
                </a>
              </Link>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </Header>
  )
}

export default TheHeader
