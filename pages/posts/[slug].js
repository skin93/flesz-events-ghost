import { Article } from '../../components/index'
import FeaturedPosts from '../../components/posts/FeaturedPosts'

import styled from 'styled-components'
import { device } from '../../constants/device'
import useSWR from 'swr'
import { useRouter } from 'next/router'

const StyledPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.laptopL} {
    grid-template-columns: 4fr 2fr;
    overflow: hidden;

    & > :nth-child(2) {
      position: fixed;
      top: 230px;
      left: 70%;
    }
  }
`

const Aside = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  padding: 15px 0;
  min-height: 200px;
  max-width: 100%;
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

  return (
    <StyledPageContainer>
      <Article data={post} />
      <Aside>
        <h2>Zobacz także: </h2>
        <FeaturedPosts featured={featured} />
      </Aside>
    </StyledPageContainer>
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
