import { combineReducers } from 'redux';
import MessageReducer from './messageReducer';
import UserStatus from './userStatus';
import UserInfo from './userInfo';
import Upload from './upload';

const chatReducers =  combineReducers({MessageReducer, UserStatus, UserInfo, Upload});

export default chatReducers;
