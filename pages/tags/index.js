import styled from 'styled-components'
import Tags from '../../components/tags/Tags'

const LatestPosts = styled.section``

const Header = styled.h2`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  font-size: 3rem;
  color: ${({ theme }) => theme.light};
`

const TagsPage = ({ tags, meta }) => {
  return (
    <>
      <LatestPosts>
        <Header>Tagi</Header>
        <Tags tags={tags} />
      </LatestPosts>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/tags/?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  const data = await res.json()

  return {
    props: {
      tags: data.tags,
      meta: data.meta
    }
  }
}

export default TagsPage
