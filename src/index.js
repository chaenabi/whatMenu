import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer, rootSaga } from './modules/root'
import createSagaMiddleware from 'redux-saga'

const customHistory = createBrowserHistory()
//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)))
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory }), sagaMiddleware, logger)))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <React.StrictMode>
    <Router history={customHistory}>
        <Provider store={store}>
        <App />
        </Provider>
    </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
