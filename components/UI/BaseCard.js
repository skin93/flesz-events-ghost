import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  min-height: 250px;
  margin: 30px;
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`

export const CardOverlay = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 1;
  }
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  min-height: 50px;
  background: rgba(0, 0, 0, 0.6);
`

export const CardTitle = styled.h4`
  text-transform: uppercase;
  color: var(--light);
  font-size: 1.2rem;
  transition: border 0.3s ease-out;
  margin: 0;
  z-index: 100;
  &::before {
    content: '';
    border-left: 3px solid var(--orange);
    border-width: 5px;
    margin-right: 10px;
    overflow: hidden;
  }
`

export const Published = styled.small`
  font-weight: bold;
  color: var(--light);
  z-index: 100;
  &::before {
    content: '';
    border-left: 3px solid transparent;
    border-width: 5px;
    margin-right: 10px;
    overflow: hidden;
  }
`
