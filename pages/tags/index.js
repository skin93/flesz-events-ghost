import styled from 'styled-components'
import useSWR from 'swr'
import Tags from '../../components/tags/Tags'

const LatestPosts = styled.section``

const Header = styled.h2`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  font-size: 3rem;
  color: ${({ theme }) => theme.light};
`

const TagsPage = (props) => {
  const {
    data
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/tags/?key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { initialData: props.data }
  )

  const tags = data.tags
  const meta = data.meta
  return (
    <>
      <LatestPosts>
        <Header>Tagi</Header>
        <Tags tags={tags} />
      </LatestPosts>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/tags/?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default TagsPage
