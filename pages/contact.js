import React from 'react'
import styled from 'styled-components'

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.light};
`

const ContactHeader = styled.h2`
  text-transform: uppercase;
  font-size: 3rem;
`

const ContactBody = styled.div`
  display: block;
  font-size: 1.2rem;
`

const Email = styled.span`
  color: ${({ theme }) => theme.orange};
`

const Contact = () => {
  return (
    <StyledContact>
      <ContactHeader>Kontakt</ContactHeader>
      <ContactBody>
        Jesteście zespołem, solowymi artystami albo organizatorami koncertów lub
        festiwali? Szukacie miejsca, gdzie moglibyście zaprezentować swoją
        działalność albo pochwalić się jakimś ciekawym wydarzeniem? A może
        myślicie o patronacie? Jeżeli na któreś z tych pytań odpowiedzieliście
        twierdząco, to piszcie pod adres <Email>kontakt@flesz.events</Email>.
        Odezwiemy się :)
      </ContactBody>
    </StyledContact>
  )
}

export default Contact
