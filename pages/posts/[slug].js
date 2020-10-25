import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getSinglePost } from '../../store/actions/postActions'

import styled from 'styled-components'

const Article = styled.article`
  margin: 30px;
`

const ArticleImg = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`

const ArticleTitle = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: var(--light);
  margin: 0;
`

const ImgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.466);
  z-index: 99;
`

const ArticleExcerpt = styled.p`
  font-size: 1.2rem;
  color: var(--light);
`

const ArticleContent = styled.div`
  color: var(--light);

  & > p {
    font-size: 1.3rem;
    & > strong {
      color: var(--orange);
    }
  }
`

const PostPage = () => {
  const dispatch = useDispatch()

  const { loading, error, post } = useSelector((state) => state.postSingle)

  const router = useRouter()

  const { slug } = router.query

  useEffect(() => {
    dispatch(getSinglePost(slug))
  }, [dispatch, slug])
  return (
    <Article>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <ArticleImg
            style={{
              backgroundImage: `url(${post.feature_image})`,
            }}
          >
            <ArticleTitle>{post.title}</ArticleTitle>
            <ImgOverlay />
          </ArticleImg>
          <ArticleExcerpt>{post.excerpt}</ArticleExcerpt>
          <ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </>
      )}
    </Article>
  )
}

export default PostPage
