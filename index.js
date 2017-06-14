import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
// import store from './store/store';
import routes from './routes';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Root from './containers/Root';
import configureStore from './store/store';

// console.log(store.getState());
//
// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );
const store = configureStore(browserHistory, window.__INITIAL_STATE__);

render(
    <Root store={store} />,
    document.getElementById('Chat')
);
