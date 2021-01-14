import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import app from './reducers'

const store = createStore(app, applyMiddleware(reduxThunk));

export default store
