import styled from 'styled-components'
export const Card = styled.div`
  max-width: 100%;
  height: 300px;
  margin: 30px;
  background-color: var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`

export const ImgTop = styled.img`
  object-fit: cover;
  height: 250px;
  width: 100%;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`

export const CardTitle = styled.h4`
  text-transform: uppercase;
`
