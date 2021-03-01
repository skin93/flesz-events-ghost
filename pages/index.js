import { useState, useEffect } from 'react'
import SEO from '../components/seo/SEO'
import Posts from '../components/posts/Posts'
import { LoadMoreButton } from '../components'

const IndexPage = ({ posts, errors }) => {
  if (errors) return <Error message='Brak wpisów' />

  const postsPerPage = 9

  const [postsToShow, setPostsToShow] = useState([])
  const [next, setNext] = useState(postsPerPage)

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end)
    setPostsToShow((prevPosts) => [...prevPosts, ...slicedPosts])
  }

  useEffect(() => {
    loopWithSlice(0, postsPerPage)
  }, [])

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage)
    setNext(next + postsPerPage)
  }
  return (
    <>
      <SEO />
      <h1>Ostatnie wpisy</h1>
      <Posts posts={postsToShow} />
      <LoadMoreButton
        disabled={next >= posts.length}
        onClick={handleShowMorePosts}
      >
        Wczytaj więcej
      </LoadMoreButton>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.API}/posts/?key=${process.env.API_KEY}&include=tags`
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
