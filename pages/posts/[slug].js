import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getSinglePost } from '../../store/actions/postActions'

const PostPage = () => {
  const dispatch = useDispatch()

  const { loading, error, post } = useSelector((state) => state.postSingle)

  const router = useRouter()

  const { slug } = router.query

  useEffect(() => {
    dispatch(getSinglePost(slug))
  }, [dispatch])
  return (
    <article>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      )}
    </article>
  )
}

export default PostPage
