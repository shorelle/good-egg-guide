import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import listReducer from './modules/list'
import locationReducer from './modules/location'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const rootReducer = combineReducers({
  list: listReducer,
  location: locationReducer
})

const store = createStoreWithMiddleware(rootReducer)

export default store