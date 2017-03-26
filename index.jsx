import React from 'react';
import { render } from 'react-dom'
import Chat from './chat.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';

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
