import styled from 'styled-components'
import { device } from '../../constants/device'

export const StyledPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 30px;

  @media ${device.laptopL} {
    grid-template-columns: 4fr 2fr;
    overflow: hidden;
  }
`

export const Aside = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  padding: 15px;
  min-height: 200px;
  max-width: 100%;
  @media ${device.laptopL} {
    margin-left: auto;
    padding-top: 200px;
  }
  h2 {
    text-align: left;
    color: ${({ theme }) => theme.light};
    margin: 0;
    font-size: 2rem;
    padding: 10px;
  }
`
