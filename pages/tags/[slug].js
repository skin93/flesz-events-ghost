import { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR from 'swr'
import Posts from '../../components/posts/Posts'
import { Pagination } from '../../components/index'

const PostsByTag = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    color: ${({ theme }) => theme.light};
  }

  span {
    color: ${({ theme }) => theme.accent};
  }
`

const TagPage = (props) => {
  const router = useRouter()
  const { slug, page } = router.query
  const data1 = useSWR(
    `${process.env.NEXT_PUBLIC_API}/tags/slug/${slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { initialData: props.data1 }
  )
  const data2 = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=6&filter=primary_tag:${slug}&include=tags&page=${page}`,
    { initialData: props.data2 }
  )

  const tag = data1.data.tags[0]
  const posts = data2.data.posts
  const pagination = data2.data.meta.pagination

  return (
    <PostsByTag>
      <h2>
        <span>#</span> {tag.name}
      </h2>
      <Posts posts={posts} />
      <Pagination pagination={pagination} location={`/tags/${slug}`} />
    </PostsByTag>
  )
}

export async function getServerSideProps({ query, params }) {
  const page = query.page || 1
  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/tags/slug/${params.slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  const data1 = await res1.json()

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=6&filter=primary_tag:${params.slug}&include=tags&page=${page}`
  )
  const data2 = await res2.json()

  return {
    props: {
      data1,
      data2
    }
  }
}

export default TagPage
