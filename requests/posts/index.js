import useSWR from 'swr'

export const usePosts = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export const useSinglePost = (postSlug) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/slug/${postSlug}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export const useFeaturedPosts = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&filter=featured:true`
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export const usePostsByTagSlug = (tagSlug) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&filter=tag:${tagSlug}`
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
