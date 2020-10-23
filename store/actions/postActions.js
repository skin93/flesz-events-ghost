import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_FEATURED_REQUEST,
  POST_LIST_FEATURED_SUCCESS,
  POST_LIST_FEATURED_FAIL,
} from '../constants/postConstants'

import { getPosts, getFeaturedPosts } from '../../pages/api/posts'

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    })
    const data = await getPosts()

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.errors[0].message
          ? error.response.data.errors[0].message
          : error.message,
    })
  }
}

export const listPostsFeatured = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_FEATURED_REQUEST,
    })
    const data = await getFeaturedPosts()

    dispatch({
      type: POST_LIST_FEATURED_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FEATURED_FAIL,
      payload:
        error.response && error.response.data.errors[0].message
          ? error.response.data.errors[0].message
          : error.message,
    })
  }
}
