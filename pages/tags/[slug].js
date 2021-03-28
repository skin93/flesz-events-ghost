import SEO from '../../components/SEO'
import Posts from '../../components/Posts'
import Pagination from '../../components/UI/Pagination'
import Error from '../../components/Error'
import { theme } from '../../theme'

const TagPage = ({ tag, posts, meta: { pagination }, errors }) => {
  if (errors) return <Error message='Brak postów' />

  return (
    <>
      <SEO title={tag.name} description={tag.description} />
      <h1>
        <span style={{ color: theme.accent }}>#</span>
        {tag.name}
      </h1>
      <Posts posts={posts} />
      <Pagination pagination={pagination} location={`/tags/${tag.slug}`} />
    </>
  )
}

export async function getServerSideProps({ query, params }) {
  const page = query.page || 1
  const res1 = await fetch(
    `${process.env.API}/tags/slug/${params.slug}?key=${process.env.API_KEY}`
  )
  const data1 = await res1.json()

  const res2 = await fetch(
    `${process.env.API}/posts/?key=${process.env.API_KEY}&limit=9&include=tags&page=${page}&filter=tags:['${params.slug}']&order=published_at%20desc`
  )
  const data2 = await res2.json()

  return {
    props: {
      tag: data1.tags && data1.tags.length > 0 ? data1.tags[0] : null,
      errors:
        !data1 || (data1.errors && data1.errors.length > 0)
          ? data1.errors[0]
          : null,
      posts: data2.posts,
      meta: data2.meta
    }
  }
}

export default TagPage
