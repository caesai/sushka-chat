import chatReducers from '../reducers/';
import routes from '../routes';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory'; // need to remove from package.json

let store = createStore(chatReducers, composeWithDevTools(applyMiddleware(thunk)), reduxReactRouter({routes, createHistory}));

export default store;
