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

import api from '../../pages/api/index'

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    })
    const data = await api.posts.browse({
      include: 'tags,authors',
      limit: 'all',
    })

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

export const getSinglePost = (postSlug) => async (dispatch) => {
  try {
    dispatch({
      type: POST_SINGLE_REQUEST,
    })
    const data = await api.posts.read(
      {
        slug: postSlug,
      },
      { include: 'tags,authors' }
    )

    dispatch({
      type: POST_SINGLE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POST_SINGLE_FAIL,
      payload:
        error.response && error.response.data.errors[0].message
          ? error.response.data.errors[0].message
          : error.message,
    })
  }
}

export const getPostsFeatured = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_FEATURED_REQUEST,
    })
    const data = await api.posts.browse(
      {
        filter: ['featured:true'],
      },
      { include: 'tags,authors' }
    )

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
