import { useEffect } from 'react'
import { StyledNav } from './Nav.styled'

const Nav = ({ open, setOpen, children, ...props }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('click', (e) =>
        e.target.nodeName == 'A' ? setOpen(false) : null
      )

      const header = document.querySelector('header')
      window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 50) {
          header.classList.add('black-nav')
        } else {
          header.classList.remove('black-nav')
        }
      })
    }
  }, [])
  return (
    <StyledNav open={open} setOpen={setOpen} {...props}>
      {children}
    </StyledNav>
  )
}

export default Nav
