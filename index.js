import React from 'react';
import { render } from 'react-dom'
import Chat from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import * as style from './scss/main.scss';

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

render(
    <Provider store={store}>
        <Chat/>
    </Provider>,
    document.getElementById('Chat')
);
