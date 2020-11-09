import { useEffect, useState } from 'react'
import { Article } from '../../components/index'
import FeaturedPosts from '../../components/posts/FeaturedPosts'

import styled from 'styled-components'
import { device } from '../../constants/device'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import SEO from '../../components/seo/SEO'
import DisqusComments from '../../components/UI/Disqus'
import { ScrollToTopButton } from '../../components/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const StyledPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 30px;

  @media ${device.laptopL} {
    grid-template-columns: 4fr 2fr;
    overflow: hidden;
  }
`

const ArticleWrapper = styled.div``

export const ArticleTitle = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 2rem;
  color: ${({ theme }) => theme.light};

  @media ${device.laptopL} {
    font-size: 4rem;
  }
`

const Aside = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  padding: 15px;
  min-height: 200px;
  max-width: 100%;
  @media ${device.laptop} {
    margin-left: auto;
  }
  & > h2 {
    text-align: center;
    color: ${({ theme }) => theme.light};
    margin: 0;
    font-size: 2rem;
    padding: 10px;
  }
`

const PostPage = (props) => {
  const router = useRouter()
  const [showButton, setShowButton] = useState(false)
  const { slug } = router.query

  const postData = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/slug/${slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { initialData: props.data1 }
  )
  const post = postData.data.posts[0]

  const featuredData = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&filter=featured:true`,
    { initialData: props.data2 }
  )
  const featured = featuredData.data.posts

  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollButton = document.getElementById('scrollButton')

      const showButton = () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      }

      window.addEventListener('scroll', showButton)

      const scrollToTop = () => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
      }

      scrollButton.addEventListener('click', scrollToTop)

      return () => {
        window.removeEventListener('scroll', showButton)
        scrollButton.removeEventListener('click', scrollToTop)
      }
    }
  })

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />
      <ArticleTitle>{post.title}</ArticleTitle>
      <StyledPageContainer>
        <ArticleWrapper>
          <Article data={post} />
          <DisqusComments post={post} />
        </ArticleWrapper>
        <Aside>
          <h2>Zobacz także: </h2>
          <FeaturedPosts featured={featured} />
        </Aside>
      </StyledPageContainer>
      <ScrollToTopButton id='scrollButton' showButton={showButton}>
        <FontAwesomeIcon color='#212121' size='sm' icon={faArrowUp} />
      </ScrollToTopButton>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/slug/${params.slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  const data1 = await res1.json()

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&filter=featured:true`
  )
  const data2 = await res2.json()

  return {
    props: {
      data1,
      data2
    }
  }
}

export default PostPage
