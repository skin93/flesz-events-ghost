import { useEffect } from 'react'
import { StyledNav } from './Nav.styled'

const Nav = ({ open, setOpen, children, ...props }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('click', (e) =>
        e.target.nodeName == 'UL' ? setOpen(false) : null
      )
    }
  }, [])
  return (
    <StyledNav open={open} setOpen={setOpen} {...props}>
      {children}
    </StyledNav>
  )
}

export default Nav
