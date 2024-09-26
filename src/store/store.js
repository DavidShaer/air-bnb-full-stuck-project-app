import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { stayReducer } from './stay.reducer'
import { userReducer } from './user.reducer'

// Combine the reducers
const rootReducer = combineReducers({
    stayModule: stayReducer,
    userModule: userReducer,
})

// Setup Redux DevTools if available, otherwise use regular compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Apply the middleware (redux-thunk in this case)
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)



// export const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk))
// )



// import { createStore, combineReducers } from 'redux'
// import { userReducer } from './user.reducer'
// import { stayReducer } from './stay.reducer'

// const rootReducer = combineReducers({
//     stayModule: stayReducer,
//     userModule: userReducer,
// })


// const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
// export const store = createStore(rootReducer, middleware)

// For debug:
// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })