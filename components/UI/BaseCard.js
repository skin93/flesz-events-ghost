import styled from 'styled-components'
import { device } from '../../constants/device'

export const Card = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-20px);
  }
`

export const CardImg = styled.img`
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 75%;
  object-fit: cover;
  overflow: hidden;
`
export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;
  padding: 0 5px;
  background: ${({ theme }) => theme.accent};
`

export const BadgeName = styled.small`
  color: ${({ theme }) => theme.black};
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
  height: 25%;
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
