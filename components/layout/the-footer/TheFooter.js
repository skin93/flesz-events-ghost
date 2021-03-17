import Link from 'next/link'
import { Footer, FooterContent, FooterItem, Copy } from './TheFooter.styled'

const TheFooter = () => {
  return (
    <Footer>
      <FooterContent>
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
