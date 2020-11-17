// TODO: Import `createStore` from `redux`
import { createStore, applyMiddleware } from 'redux';
// TODO: Import `rootReducer`
import rootReducer from './reducers/rootReducer';
// TODO: Import middleware
import thunk from 'redux-thunk';

import logger from 'redux-logger';

// TODO: Define a `configureStore` function
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger))
}
// TODO: Export the `configureStore` function

export default configureStore;
