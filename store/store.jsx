import chatReducers from '../reducers/index.jsx';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store = createStore(chatReducers, applyMiddleware(thunk));

export default  store;