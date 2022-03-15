import { createStore, compose, applyMiddleware } from 'redux'
import CombinedReducer from './reducers'
import middlewares from './middlewares'
import thunk from 'redux-thunk'


const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const componseEnhencers = composeAlt( 
    applyMiddleware(thunk,...middlewares),
)

const Store = createStore(
    CombinedReducer,
    componseEnhencers
)


export default Store