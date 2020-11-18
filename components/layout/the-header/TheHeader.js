import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import BaseLink from '../../UI/BaseLink'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Nav } from '../../index'
import { NavToggler } from '../../index'
import { Header, Logo, Navbar, NavbarBrand, NavItem } from './TheHeader.styled'

const TheHeader = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <Header>
      <Navbar>
        <NavbarBrand>
          <Link href='/'>
            <a>
              <Logo src='/logo/biale-logo-pelny-napis-akcent.png' alt='Logo' />
            </a>
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
            <FontAwesomeIcon
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('https://facebook.com/flesz-events')}
              size='lg'
              color='white'
              icon={faFacebook}
            />
          </NavItem>
        </Nav>
      </Navbar>
    </Header>
  )
}

export default TheHeader
