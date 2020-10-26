import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getSinglePost } from '../../store/actions/postActions'

import BaseLoader from '../../components/UI/BaseLoader'
import Article from '../../components/article/Article'
import Aside from '../../components/layout/Aside'
import PageContainer from '../../components/layout/PageContainer'
import BaseError from '../../components/UI/BaseError'

const PostPage = () => {
  const dispatch = useDispatch()

  const { loading, error, post } = useSelector((state) => state.postSingle)

  const router = useRouter()

  const { slug } = router.query

  useEffect(() => {
    dispatch(getSinglePost(slug))
  }, [dispatch, slug])
  return (
    <>
      {loading ? (
        <BaseLoader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <PageContainer>
          <Article data={post} />
          <Aside />
        </PageContainer>
      )}
    </>
  )
}

export default PostPage
