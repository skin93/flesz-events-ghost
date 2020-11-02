import styled from 'styled-components'
import { device } from '../../../constants/device'

export const StyledNav = styled.ul`
  list-style: none;
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.open ? '100vh' : 0)};
  margin: 0;
  padding: 0;
  transition: all 0.8s ease-in-out;

  @media ${device.tablet} {
    height: auto;
    display: flex;
    flex: 5;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    overflow: hidden;
  }
`
