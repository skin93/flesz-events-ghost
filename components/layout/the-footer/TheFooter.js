import Link from 'next/link'
import { Footer, FooterContent, FooterItem, Copy } from './TheFooter.styled'

const TheFooter = () => {
  return (
    <Footer>
      <FooterContent>
        <FooterItem>
          <Link href={'/about'}>
            <a>O Nas</a>
          </Link>
        </FooterItem>
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
