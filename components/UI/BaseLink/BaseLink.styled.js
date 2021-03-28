import styled from 'styled-components'

export const StyledLink = styled.div`
  a {
    color: ${(props) => (props.active ? props.theme.light : props.theme.muted)};
    transition: color 0.2s ease-in;
    &:hover {
      color: white;
    }
  }
`
