import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import routes from './routes';
import {ReduxRouter} from 'redux-router';
import Root from './containers/Root';

// console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

render(
    <Root store={store} />,
    document.getElementById('Chat')
);
