import Link from 'next/link'
import { useState } from 'react'
import BaseLink from '../../UI/BaseLink'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Nav } from '../../index'
import { NavToggler } from '../../index'
import { Header, Navbar, NavbarBrand, NavItem } from './TheHeader.styled'

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
