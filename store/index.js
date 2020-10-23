import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  postListReducer,
  postListFeaturedReducer,
  postSingleReducer,
} from './reducers/postReducers'

const initialState = {}

const reducer = combineReducers({
  postList: postListReducer,
  postListFeatured: postListFeaturedReducer,
  postSingle: postSingleReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
