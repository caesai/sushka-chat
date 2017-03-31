import chatReducers from '../reducers/index.jsx';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(chatReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
