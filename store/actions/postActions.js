import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_FEATURED_REQUEST,
  POST_LIST_FEATURED_SUCCESS,
  POST_LIST_FEATURED_FAIL,
  POST_LIST_BY_TAG_REQUEST,
  POST_LIST_BY_TAG_SUCCESS,
  POST_LIST_BY_TAG_FAIL,
  POST_SINGLE_REQUEST,
  POST_SINGLE_SUCCESS,
  POST_SINGLE_FAIL
} from '../constants/postConstants'

import axios from 'axios'
import { errorMessage } from '../../constants/errorMessage'

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST
    })
    const { data } = await axios.get(
      `http://${process.env.NEXT_PUBLIC_API}/poss/?key=${process.env.NEXT_PUBLIC_API_KEY}`
    )

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: { posts: data.posts, meta: data.meta }
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload: errorMessage
    })
  }
}

export const getPostsByTag = (tagSlug) => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_BY_TAG_REQUEST
    })
    const { data } = await axios.get(
      `http://${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&filter=tag:${tagSlug}`
    )

    dispatch({
      type: POST_LIST_BY_TAG_SUCCESS,
      payload: { posts: data.posts, meta: data.meta }
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_BY_TAG_FAIL,
      payload: errorMessage
    })
  }
}

export const getSinglePost = (postSlug) => async (dispatch) => {
  try {
    dispatch({
      type: POST_SINGLE_REQUEST
    })
    const { data } = await axios.get(
      `http://${process.env.NEXT_PUBLIC_API}/posts/slug/${postSlug}/?key=${process.env.NEXT_PUBLIC_API_KEY}`
    )

    dispatch({
      type: POST_SINGLE_SUCCESS,
      payload: data.posts[0]
    })
  } catch (error) {
    dispatch({
      type: POST_SINGLE_FAIL,
      payload: errorMessage
    })
  }
}

export const getPostsFeatured = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_FEATURED_REQUEST
    })
    const { data } = await axios.get(
      `http://${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&filter=featured:true`
    )

    dispatch({
      type: POST_LIST_FEATURED_SUCCESS,
      payload: { posts: data.posts, meta: data.meta }
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FEATURED_FAIL,
      payload: errorMessage
    })
  }
}
