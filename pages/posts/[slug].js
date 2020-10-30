import { useRouter } from 'next/router'
import { useSinglePost } from '../../fetchers/posts/index'
import BaseLoader from '../../components/UI/BaseLoader'
import BaseError from '../../components/UI/BaseError'
import Article from '../../components/article/Article'
import Aside from '../../components/layout/Aside'
import PageContainer from '../../components/layout/PageContainer'

const PostPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const { posts, isLoading, isError } = useSinglePost(slug)

  return (
    <>
      {isLoading ? (
        <BaseLoader />
      ) : isError ? (
        <BaseError error='Failed to fetch' />
      ) : (
        <PageContainer>
          <Article data={posts[0]} />
          <Aside />
        </PageContainer>
      )}
    </>
  )
}

export default PostPage
