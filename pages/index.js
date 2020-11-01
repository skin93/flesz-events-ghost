import Posts from '../components/posts/Posts'
import styled from 'styled-components'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Pagination } from '../components/index'

const LatestPosts = styled.section``

const Header = styled.h2`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  font-size: 3rem;
  color: ${({ theme }) => theme.light};
`

const IndexPage = ({ content }) => {
  const router = useRouter()
  const { page } = router.query
  const {
    data
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=3&page=${page}`,
    { initialData: content }
  )

  const posts = data.posts
  const pagination = data.meta.pagination

  return (
    <LatestPosts>
      <Header>Ostatnie wpisy</Header>
      <Posts posts={posts} />
      <Pagination pagination={pagination} location='/' />
    </LatestPosts>
  )
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=3&page=${page}`
  )
  const content = await res.json()

  return {
    props: {
      content
    }
  }
}

export default IndexPage
