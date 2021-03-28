import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { device } from '../../constants/device'

import Link from 'next/link'
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import SEO from '../../components/SEO'
import FeaturedPosts from '../../components/FeaturedPosts'
import Article from '../../components/Article'
import {
  ArticleTitle,
  PublishedContainer,
  PublishedDate,
  PublishedAuthors,
  TagsContainer,
  ArticleTag,
  ArticleHeader
} from '../../components/Article/Article.styled'
import { ScrollToTopButton } from '../../components/UI/ScrollToTopButton/ScrollToTopButton.styled'

const StyledPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 30px;

  @media ${device.laptopL} {
    grid-template-columns: 4fr 2fr;
    overflow: hidden;
  }
`

const Aside = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  margin: 30px;
  overflow: hidden;
  max-width: 100%;
  h3 {
    text-align: left;
    color: ${({ theme }) => theme.light};
    margin: 0;
    padding: 10px;
  }
`

const PostPage = ({ post, featured, errors }) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollButton = document.getElementById('scrollButton')

      const showTopButton = () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      }

      window.addEventListener('scroll', showTopButton)

      const scrollToTop = () => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
      }

      scrollButton.addEventListener('click', scrollToTop)

      return () => {
        window.removeEventListener('scroll', showTopButton)
        scrollButton.removeEventListener('click', scrollToTop)
      }
    }
  })

  if (errors) return <Error message='Something went wrong' />

  return (
    <article style={{ padding: '30px' }}>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.feature_image}
      />
      <ArticleHeader>
        <ArticleTitle>{post.title}</ArticleTitle>
        <PublishedContainer>
          <TagsContainer>
            {post.tags &&
              post.tags.length > 0 &&
              post.tags.map((tag) => (
                <Link key={tag.id} href={`/tags/${tag.slug}?page=1`}>
                  <a>
                    <ArticleTag>{tag.name}</ArticleTag>
                  </a>
                </Link>
              ))}
          </TagsContainer>
          <PublishedDate>
            {moment(post.published_at).format('DD-MM-YYYY')}
          </PublishedDate>
          {post.authors.map((author) => (
            <PublishedAuthors key={author.name}>{author.name}</PublishedAuthors>
          ))}
        </PublishedContainer>
      </ArticleHeader>
      <StyledPageContainer>
        <Article post={post} />
        <Aside>
          <h3>Zobacz także </h3>
          <FeaturedPosts featured={featured} />
        </Aside>
      </StyledPageContainer>
      <ScrollToTopButton id='scrollButton' showButton={showButton}>
        <FontAwesomeIcon color='#212121' size='sm' icon={faArrowUp} />
      </ScrollToTopButton>
    </article>
  )
}

export async function getServerSideProps({ params }) {
  const res1 = await fetch(
    `${process.env.API}/posts/slug/${params.slug}?key=${process.env.API_KEY}&include=authors,tags`
  )
  const data1 = await res1.json()

  const res2 = await fetch(
    `${process.env.API}/posts/?key=${process.env.API_KEY}&filter=featured:true`
  )
  const data2 = await res2.json()

  return {
    props: {
      post: data1.posts && data1.posts.length > 0 ? data1.posts[0] : null,
      errors:
        !data1 || (data1.errors && data1.errors.length > 0)
          ? data1.errors[0]
          : null,
      featured: data2.posts
    }
  }
}

export default PostPage
