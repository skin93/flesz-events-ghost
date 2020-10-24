import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_FEATURED_REQUEST,
  POST_LIST_FEATURED_SUCCESS,
  POST_LIST_FEATURED_FAIL,
  POST_SINGLE_REQUEST,
  POST_SINGLE_SUCCESS,
  POST_SINGLE_FAIL,
} from '../constants/postConstants'

import axios from 'axios'

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    })
    const { data } = await axios.get(
      `http://${process.env.NEXT_PUBLIC_DEV_DOMAIN}/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}`
    )

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: { posts: data.posts, meta: data.meta },
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getSinglePost = (postSlug) => async (dispatch) => {
  try {
    dispatch({
      type: POST_SINGLE_REQUEST,
    })
    const { data } = await axios.get(
      `http://${process.env.NEXT_PUBLIC_DEV_DOMAIN}/ghost/api/v3/content/posts/slug/${postSlug}/?key=${process.env.NEXT_PUBLIC_API_KEY}`
    )

    dispatch({
      type: POST_SINGLE_SUCCESS,
      payload: data.posts[0],
    })
  } catch (error) {
    dispatch({
      type: POST_SINGLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getPostsFeatured = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_FEATURED_REQUEST,
    })
    const { data } = await axios.get(
      `http://${process.env.NEXT_PUBLIC_DEV_DOMAIN}/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&filter=featured:true`
    )

    dispatch({
      type: POST_LIST_FEATURED_SUCCESS,
      payload: { posts: data.posts, meta: data.meta },
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FEATURED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
