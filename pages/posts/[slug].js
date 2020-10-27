import { useRouter } from 'next/router'
import { useSinglePost } from '../../requests/posts/index'
import BaseLoader from '../../components/UI/BaseLoader'
import Article from '../../components/article/Article'
import Aside from '../../components/layout/Aside'
import PageContainer from '../../components/layout/PageContainer'
import BaseError from '../../components/UI/BaseError'

const PostPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data, isLoading, isError } = useSinglePost(slug)
  return (
    <>
      {isLoading ? (
        <BaseLoader />
      ) : isError ? (
        <BaseError>{isError}</BaseError>
      ) : (
        <PageContainer>
          <Article data={data.posts[0]} />
          <Aside />
        </PageContainer>
      )}
    </>
  )
}

export default PostPage
