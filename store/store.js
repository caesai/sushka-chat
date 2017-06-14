import chatReducers from '../reducers/';
import routes from '../routes';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';

export default function configureStore(history, initialState) {
    const logger = createLogger();

    // Middleware you want to use in development:
    let middleware = applyMiddleware(thunk, promise, logger);

    let createStoreWithMiddleware = compose(
      middleware,
      reduxReactRouter({routes, createHistory}),
      // Required! Enable Redux DevTools with the monitors you chose
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    const store = createStoreWithMiddleware(createStore)(chatReducers, initialState);

    if (module.hot) {
        module.hot
            .accept('../reducers', () => {
                const nextRootReducer = require('../reducers/index');
                store.replaceReducer(nextRootReducer);
            });
    }

    return store;

}
