import styled from 'styled-components'
import { device, size } from '../../../constants/device'

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 30px 0;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.accent};
  padding: 10px 20px;
  margin: 0 10px;
  font-family: 'Montserrat-Bold', sans-serif;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    background-color: ${({ theme }) => theme.gray};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.light};
  }
`

export const PaginationItem = styled(Button)`
  background-color: ${(props) =>
    props.active ? props.theme.accent : props.theme.black};
  color: ${(props) => (props.active ? props.theme.black : props.theme.light)};
  border: 1px solid ${({ theme }) => theme.accent};

  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`
