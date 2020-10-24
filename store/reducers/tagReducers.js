import {
  TAG_LIST_REQUEST,
  TAG_LIST_SUCCESS,
  TAG_LIST_FAIL,
  TAG_SINGLE_REQUEST,
  TAG_SINGLE_SUCCESS,
  TAG_SINGLE_FAIL,
} from '../constants/tagConstants'

export const tagListReducer = (state = { tags: [] }, action) => {
  switch (action.type) {
    case TAG_LIST_REQUEST:
      return { loading: true, tags: [] }
    case TAG_LIST_SUCCESS:
      return {
        loading: false,
        post: action.payload.tags,
      }
    case TAG_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const tagSingleReducer = (state = { tag: {} }, action) => {
  switch (action.type) {
    case TAG_SINGLE_REQUEST:
      return { loading: true, tag: {} }
    case TAG_SINGLE_SUCCESS:
      return {
        loading: false,
        tag: action.payload,
      }
    case TAG_SINGLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
