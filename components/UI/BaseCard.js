import styled from 'styled-components'
import { device } from '../../constants/device'

export const Card = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`

export const CardImg = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-right-radius: 15px;
  overflow: hidden;

  @media ${device.tablet} {
    height: 250px;
  }
`
export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: auto;
  height: auto;
  text-align: center;
  padding: 5px;
  background: ${({ theme }) => theme.black};
`

export const BadgeName = styled.small`
  color: ${({ theme }) => theme.light};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  font-family: 'Oswald';
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100px;
`

export const CardTitle = styled.p`
  color: ${({ theme }) => theme.light};
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Oswald';
  transition: border 0.2s ease-out;
  margin: 0;
`

export const Published = styled.small`
  font-weight: bold;
  font-family: 'Oswald';
  color: ${({ theme }) => theme.accent};
`
