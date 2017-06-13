import React from 'react';
import { render } from 'react-dom'
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import routes from './routes';
import {ReduxRouter} from 'redux-router';
// import * as style from './scss/main.scss';

// console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

render(
    <Provider store={store}>
        <ReduxRouter>
            {routes}
        </ReduxRouter>
    </Provider>,
    document.getElementById('Chat')
);
