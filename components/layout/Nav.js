import React, { useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../../constants/device'

const StyledNav = styled.ul`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  overflow: hidden;
  transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.3s ease-in-out;
  margin: 0;

  @media ${device.tablet} {
    transform: translateY(0);
    position: static;
    display: flex;
    flex: 5;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    overflow: hidden;
  }
`

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
