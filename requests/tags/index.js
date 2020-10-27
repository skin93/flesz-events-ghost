import useSWR from 'swr'

export const useTags = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/tags/?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  return {
    data,
    isLoading: !data && !error,
    isError: error
  }
}

export const useSingleTag = (tagSlug) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/tags/slug/${tagSlug}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  return {
    data,
    isLoading: !data && !error,
    isError: error
  }
}
