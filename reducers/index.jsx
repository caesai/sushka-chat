import { combineReducers } from 'redux';
import MessageReducer from './messageReducer.jsx';
import UserStatus from './userStatus.jsx';
import UserInfo from './userInfo.jsx';
import Upload from './upload.jsx';

const chatReducers =  combineReducers({MessageReducer, UserStatus, UserInfo, Upload});

export default chatReducers;