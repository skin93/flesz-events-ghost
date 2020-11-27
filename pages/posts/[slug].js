import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import SEO from '../../components/seo/SEO'
import FeaturedPosts from '../../components/posts/FeaturedPosts'
import { Article } from '../../components/index'
import { ScrollToTopButton } from '../../components/index'
import { Aside, StyledPageContainer } from './[slug].styled'

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
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.feature_image}
      />
      <StyledPageContainer>
        <Article post={post} />
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
