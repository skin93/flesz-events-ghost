import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { StyledNavToggler } from './NavToggler.styled'

const NavToggler = ({ open, setOpen, ...props }) => {
  return (
    <StyledNavToggler open={open} onClick={() => setOpen(!open)} {...props}>
      <FontAwesomeIcon color='white' icon={faBars} size='lg' />
    </StyledNavToggler>
  )
}

export default NavToggler
