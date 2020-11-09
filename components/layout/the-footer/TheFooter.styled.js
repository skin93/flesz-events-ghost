import styled from 'styled-components'
import { device } from '../../../constants/device'

export const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  min-height: 7vh;
`

export const FooterContent = styled.div`
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

export const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 0.7rem;
  color: rgba(219, 219, 219, 0.8);
  height: 50px;
  overflow: hidden;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.light};
  }
`

export const Copy = styled.div`
  padding-bottom: 10px;
  color: ${({ theme }) => theme.light};
  text-align: center;
  font-size: 0.8rem;
`
