import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import BaseLink from '../UI/BaseLink'
import { device } from '../../constants/device'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Nav from './Nav'
import NavToggler from './NavToggler'

const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
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
  color: ${({ theme }) => theme.light};
  height: 50px;
  width: 100px;
  overflow: hidden;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: bold;
`

const NavItem = styled.li`
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

const TheHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <Header>
      <Navbar>
        <NavbarBrand>
          <Link href='/'>
            <a>Logo</a>
          </Link>
        </NavbarBrand>
        <NavToggler open={open} setOpen={setOpen} />
        <Nav open={open} setOpen={setOpen}>
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
      </Navbar>
    </Header>
  )
}

export default TheHeader
