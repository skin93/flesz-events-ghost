import styled from 'styled-components'
import BaseLoader from '../../components/UI/BaseLoader'
import BaseError from '../../components/UI/BaseError'
import { useTags } from '../../fetchers/tags/index'
import Tags from '../../components/tags/Tags'

const LatestPosts = styled.section``

const Header = styled.h2`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  font-size: 3rem;
  color: ${({ theme }) => theme.light};
`

const TagsPage = () => {
  const { tags, isLoading, isError } = useTags()
  return (
    <>
      {isLoading ? (
        <BaseLoader />
      ) : isError ? (
        <BaseError error='Failed to fetch' />
      ) : (
        <LatestPosts>
          <Header>Tagi</Header>
          <Tags tags={tags} />
        </LatestPosts>
      )}
    </>
  )
}

export default TagsPage
