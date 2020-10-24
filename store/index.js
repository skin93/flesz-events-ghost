import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  postListReducer,
  postListFeaturedReducer,
  postSingleReducer,
} from './reducers/postReducers'
import { tagListReducer, tagSingleReducer } from './reducers/tagReducers'

const initialState = {}

const reducer = combineReducers({
  postList: postListReducer,
  postListFeatured: postListFeaturedReducer,
  postSingle: postSingleReducer,
  tagList: tagListReducer,
  tagSingle: tagSingleReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
