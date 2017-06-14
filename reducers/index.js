import { combineReducers } from 'redux';
import {routerStateReducer} from 'redux-router';
import Authentification from './auth';
import MessageReducer from './messageReducer';
import UserStatus from './userStatus';
import UserInfo from './userInfo';
import Upload from './upload';

const chatReducers =  combineReducers({Authentification, MessageReducer, UserStatus, UserInfo, Upload, router: routerStateReducer});

export default chatReducers;
