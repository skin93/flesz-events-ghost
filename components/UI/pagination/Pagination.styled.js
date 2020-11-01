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
  color: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.gray};
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:disabled {
    background-color: ${({ theme }) => theme.gray};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #808080;
  }
`

export const PaginationItem = styled(Button)`
  background-color: ${(props) =>
    props.active ? props.theme.orange : props.theme.gray};
  border: none;

  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`
