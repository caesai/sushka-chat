import fetch from 'isomorphic-fetch';

export const USERS_LIST = 'USERS_LIST';
export const USER_JOIN = 'USER_JOIN';
export const USER_INFO = 'USER_INFO';
export const USER_LEFT = 'USER_LEFT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const FILE_SEND = 'FILE_SEND';
export const FILE_UPLOADED = 'FILE_UPLOADED';
export const LOAD_INFO_FAIL = 'LOAD_INFO_FAIL';


export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    };
}

export function receiveRawMessage(message) {
    return {
        type: RECEIVE_MESSAGE,
        message
    };
}

export function getUsersList(user){
  return {
    type: USERS_LIST,
    user
  }
}

export function userJoin (user) {
    return {
        type: USER_JOIN,
        user
    }
}

export function thisUserInfo (user) {
    return {
        type: USER_INFO,
        user
    }
}

export function userLeft (user) {
    return {
        type: USER_LEFT,
        user
    }
}

function loadFile(file) {
    return {
            type: 'FILE_SEND',
            file
        }
}

function recieveFile(file) {
    return {
      type:'FILE_UPLOADED',
      file,
      recievedAt: Date.now()
    }
}

export function fetchFile(file) {
  return dispatch => {
    dispatch(loadFile(file))
    return fetch(`/upload`, {
        method: 'POST',
        body: new FormData(file)
      }
    )
      .then(response => {
        console.log(response);
        response
      })
      .then(json => dispatch(recieveFile(file)))
  }
}
