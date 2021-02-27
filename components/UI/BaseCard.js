import styled from 'styled-components'
import { device } from '../../constants/device'

export const Card = styled.div`
  height: 250px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
`

export const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export const CardImg = styled.img`
  position: relative;
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`
export const Badge = styled.small`
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;
  /* margin-right: 5px; */
  padding: 2px 5px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
  font-weight: bold;
`

export const CardBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px;
  width: 100%;
  height: auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const CardTitle = styled.p`
  color: ${({ theme }) => theme.light};
  font-weight: bold;
  font-size: calc(1rem + 0.2vw);
`

export const Published = styled.small`
  font-weight: bold;
  color: ${({ theme }) => theme.accent};
`
