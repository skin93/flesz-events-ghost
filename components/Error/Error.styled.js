import styled from 'styled-components'

export const StyledError = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  font-size: 2rem;
  min-height: 100%;

  color: ${({ theme }) => theme.light};
`
