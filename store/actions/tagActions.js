import {
  TAG_LIST_REQUEST,
  TAG_LIST_SUCCESS,
  TAG_LIST_FAIL,
  TAG_SINGLE_REQUEST,
  TAG_SINGLE_SUCCESS,
  TAG_SINGLE_FAIL
} from '../constants/tagConstants'

import axios from 'axios'
import { errorMessage } from '../../constants/errorMessage'

export const getTags = () => async (dispatch) => {
  try {
    dispatch({
      type: TAG_LIST_REQUEST
    })
    const { data } = await axios.get(
      `http://${process.env.NEXT_PUBLIC_API}/tags/?key=${process.env.NEXT_PUBLIC_API_KEY}`
    )

    dispatch({
      type: TAG_LIST_SUCCESS,
      payload: { tags: data.tags, meta: data.meta }
    })
  } catch (error) {
    dispatch({
      type: TAG_LIST_FAIL,
      payload: errorMessage
    })
  }
}

export const getTag = (tagSlug) => async (dispatch) => {
  try {
    dispatch({
      type: TAG_SINGLE_REQUEST
    })
    const { data } = await axios.get(
      `http://${process.env.NEXT_PUBLIC_API}/tags/slug/${tagSlug}/?key=${process.env.NEXT_PUBLIC_API_KEY}`
    )

    dispatch({
      type: TAG_SINGLE_SUCCESS,
      payload: data.tags[0]
    })
  } catch (error) {
    dispatch({
      type: TAG_SINGLE_FAIL,
      payload: errorMessage
    })
  }
}
