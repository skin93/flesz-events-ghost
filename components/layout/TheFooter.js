import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { device } from '../../constants/device'

const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  min-height: 7vh;
`

const FooterContent = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 15px;
  min-width: 250px;
  overflow: hidden;

  @media ${device.tablet} {
    max-width: 1440px;
  }
`

const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 0.8rem;
  color: gray;
  height: 50px;
  overflow: hidden;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.light};
  }
`

const Copy = styled.div`
  padding-bottom: 10px;
  color: ${({ theme }) => theme.light};
  text-align: center;
  font-size: 0.8rem;
`

const TheFooter = () => {
  return (
    <Footer>
      <FooterContent>
        <FooterItem>Informacje</FooterItem>
        <FooterItem>
          <Link href={'/contact'}>
            <a>Kontakt</a>
          </Link>
        </FooterItem>
        <FooterItem>
          <Link href={'/tags'}>
            <a>Tagi </a>
          </Link>
        </FooterItem>
      </FooterContent>
      <Copy>&copy; {new Date().getFullYear()} Flesz.Events</Copy>
    </Footer>
  )
}

export default TheFooter
