import {
  TAG_LIST_REQUEST,
  TAG_LIST_SUCCESS,
  TAG_LIST_FAIL,
  TAG_SINGLE_REQUEST,
  TAG_SINGLE_SUCCESS,
  TAG_SINGLE_FAIL,
} from '../constants/tagConstants'

export const getTags = () => async (dispatch) => {
  try {
    dispatch({
      type: TAG_LIST_REQUEST,
    })
    const data = await api.posts.browse({
      include: 'posts,authors',
      limit: 'all',
    })

    dispatch({
      type: TAG_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TAG_LIST_FAIL,
      payload:
        error.response && error.response.data.errors[0].message
          ? error.response.data.errors[0].message
          : error.message,
    })
  }
}

export const getSingleTag = (tagSlug) => async (dispatch) => {
  try {
    dispatch({
      type: TAG_SINGLE_REQUEST,
    })
    const data = await api.tags.read(
      {
        slug: tagSlug,
      },
      { include: 'posts,authors' }
    )

    dispatch({
      type: TAG_SINGLE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TAG_SINGLE_FAIL,
      payload:
        error.response && error.response.data.errors[0].message
          ? error.response.data.errors[0].message
          : error.message,
    })
  }
}
