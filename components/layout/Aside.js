import styled from 'styled-components'

export default styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  padding: 30px;
  min-height: 200px;
  max-width: 100%;

  & > h2 {
    text-align: center;
    color: ${({ theme }) => theme.light};
    margin: 0;
    font-size: 2rem;
    padding: 10px;
  }
`
