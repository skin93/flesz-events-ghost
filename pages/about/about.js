import styled from 'styled-components'
import SEO from '../../components/seo/SEO'

const InfoStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.light};
`

const InfoHeader = styled.h2`
  text-transform: uppercase;
  font-size: 3rem;
`
const InfoBody = styled.div`
  font-size: 1.5rem;

  span {
    color: ${({ theme }) => theme.accent};
  }
`

const AboutPage = () => {
  return (
    <>
      <SEO
        title='O Nas'
        description='Krótka rozprawka o tym jak to wszystko się zaczęło.'
      />
      <InfoStyled>
        <InfoHeader>O Nas</InfoHeader>
        <InfoBody>
          <p>
            <span>Flesz.Events</span> (dawniej Projekt.Events) to{' '}
            <span>
              niezależny portal prowadzony przez niepoprawnych melomanów
            </span>
            . Nie jesteśmy dziennikarzami z krwi i kości ani nie ukończyliśmy
            specjalistycznych kursów. Każde z nas reprezentuje inną branżę
            zawodową, lecz łączy nas jedno -{' '}
            <span>chęć dzielenia się dobrą i zarazem ciekawą muzyką</span>.
          </p>
          <p>
            Gusta mamy szerokie. Nie zamykamy się wyłącznie na jeden gatunek,
            jednakże <span>muzyka rockowa oraz metalowa </span> to główne
            obiekty naszych zainteresować. Disco Polo tutaj nie
            uświadczycie...chyba.
          </p>
          <p>
            Po za robieniem zdjęć i pisaniem relacji objeliśmy swoim patronatem
            wiele interesująych wydarzeń - tych małych jak i tych większych.{' '}
            <span>Pol'and'Rock Festival</span> (dawniej Przystanek Woodstock),{' '}
            <span>3-majówka</span>, <span>Rock Na Bagnie</span>,{' '}
            <span>Rockowe Granie</span>, <span>Krzywizna Fest</span>,{' '}
            <span>Gardłotyki Festiwal</span>, czy
            <span>Wieża Rocka</span> to tylko niektóre imprezy, które udało nam
            się odwiedzić i pomóc w promocji.
          </p>
          <p>
            Oczywiście nie żyjemy samymi koncertami.{' '}
            <span>
              Przez krótki okres działalności udało nam się poznać mnóstwo
              ciekawych osób
            </span>{' '}
            - zarówno muzyków jak i organizatorów imprez. Może i nie mamy pleców
            u gigantów w przemyśle muzycznym, ale{' '}
            <span>
              jesteśmy dumni z tego, że mogliśmy być częścią każdego z wydarzeń
            </span>
            .
          </p>
          <p>
            Po niespodziewanej przerwie w działaniu powracamy, aby ponownie
            szerzyć dobre słowo na temat muzyki - tej tworznej zagranicą jak i
            naszej rodzimej scenie. Mamy siły na to, aby ponownie zanurzyć się w
            pozytywnych wibracjach. Zwłaszcza, że kiedy minie pandemia na
            festiwalowej mapie dosłownie zawrzeje.
          </p>
        </InfoBody>
      </InfoStyled>
    </>
  )
}

export default AboutPage
