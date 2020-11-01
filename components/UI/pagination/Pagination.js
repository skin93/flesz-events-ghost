import { Button, PaginationItem, StyledPagination } from './Pagination.styled'

import { useRouter } from 'next/router'

const Pagination = ({
  pagination: { prev, next, page, pages },
  location,
  ...props
}) => {
  const router = useRouter()
  return (
    <StyledPagination>
      <Button
        style={{ display: prev ? 'block' : 'none' }}
        onClick={() => {
          router.push(`${location}?page=${prev}`)
        }}
      >
        Cofnij
      </Button>
      {[...Array(pages).keys()].map((x) => (
        <PaginationItem
          active={x + 1 === page}
          onClick={() => {
            router.push(`${location}?page=${x + 1}`)
          }}
          key={x}
        >
          {x + 1}
        </PaginationItem>
      ))}
      <Button
        style={{ display: next ? 'block' : 'none' }}
        onClick={() => {
          router.push(`${location}?page=${next}`)
        }}
      >
        Dalej
      </Button>
    </StyledPagination>
  )
}

export default Pagination
