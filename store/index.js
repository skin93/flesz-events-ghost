import { useMemo } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  postListReducer,
  postListFeaturedReducer,
  postSingleReducer,
  postListByTagReducer
} from './reducers/postReducers'
import { tagListReducer, tagSingleReducer } from './reducers/tagReducers'

let store

const reducer = combineReducers({
  postList: postListReducer,
  postListFeatured: postListFeaturedReducer,
  postSingle: postSingleReducer,
  postListByTag: postListByTagReducer,

  tagList: tagListReducer,
  tagSingle: tagSingleReducer
})

const middleware = [thunk]

const initStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export default store
