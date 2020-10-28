import styled from 'styled-components'

export const Card = styled.div`
  max-width: 100%;
  min-height: 300px;
  margin: 30px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`

export const ImgTop = styled.img`
  object-fit: cover;
  height: 250px;
  width: 100%;
  border-radius: 5px;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100px;
`

export const CardTitle = styled.h4`
  text-transform: uppercase;
  color: var(--light);
  font-size: 1.5rem;
  transition: border 0.3s ease-out;
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
`
