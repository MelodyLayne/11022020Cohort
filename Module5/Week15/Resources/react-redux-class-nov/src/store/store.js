import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

//import articleReducer
import articleReducer from '../reducers/articleReducer'
import fruitReducer from '../reducers/fruitReducer'

const rootReducer = combineReducers({
  //add reducer
  article: articleReducer,
  fruit: fruitReducer,
})

let enhancer

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  enhancer = composeEnhancers(applyMiddleware(logger))
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore
