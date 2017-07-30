import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './components/App'

const middleware = [ thunk ];

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action)
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result
};

middleware.push(logger);

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);








