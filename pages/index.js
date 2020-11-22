import SEO from '../components/seo/SEO'
import Posts from '../components/posts/Posts'
import { Pagination } from '../components/index'

const IndexPage = ({ posts, meta: { pagination }, errors }) => {
  if (errors) return <Error message='Brak wpisów' />

  return (
    <>
      <SEO
        title={process.env.NEXT_PUBLIC_APP_NAME}
        description='Jesteśmy sKoncertowani na muzyce!'
      />
      <section>
        <h1>Ostatnie wpisy</h1>
        <Posts posts={posts} />
        <Pagination pagination={pagination} location='/' />
      </section>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1

  const res = await fetch(
    `${process.env.API}/posts/?key=${process.env.API_KEY}&limit=6&include=tags&page=${page}`
  )
  const data = await res.json()

  return {
    props: {
      posts: data.posts && data.posts.length > 0 ? data.posts : null,
      errors:
        !data || (data.errors && data.errors.length > 0)
          ? data.errors[0]
          : null,
      meta: data.meta
    }
  }
}

export default IndexPage
