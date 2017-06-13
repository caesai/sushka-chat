import fetch from 'isomorphic-fetch';

export const LOG_IN = 'LOG_IN';
export const USERS_LIST = 'USERS_LIST';
export const USER_JOIN = 'USER_JOIN';
export const USER_INFO = 'USER_INFO';
export const USER_LEFT = 'USER_LEFT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const FILE_SEND = 'FILE_SEND';
export const FILE_UPLOADED = 'FILE_UPLOADED';
export const LOAD_INFO_FAIL = 'LOAD_INFO_FAIL';
export const CHOOSE_USER = 'CHOOSE_USER';
export const START_CHAT = 'START_CHAT';
export const END_CHAT = 'END_CHAT';
export const DELETE_USER = 'DELETE_USER';

// const socket = new WebSocket("ws://localhost:8080/ws", ["soap", "wamp"]);
//
// socket.onopen = function() {
//   console.log("Соединение установлено.");
// };
//
// socket.onclose = function() {
//   console.log("Соединение закрыто.");
// };
//
// socket.onmessage = function(event, list) {
//   // let usersJson = JSON.parse(event.data);
//   // if (usersJson.usersList) {
//     // getUsersList(usersJson.usersList);
//   // } else {
//     receiveMessage(event.data);
//   // }
// };

// socket.onerror = function(error) {
//   alert("Ошибка " + error.message);
// };

export function authentificate (cond) {
  return {
    type: LOG_IN,
    cond
  }
}

export function userJoin (user) {
  return {
      type: USER_JOIN,
      user
  }
}

export function userLeft (user) {

  return {
      type: USER_LEFT,
      user
  }
}

export function addMessage(message) {
  socket.send(message);
  return {
      type: ADD_MESSAGE,
      message
  };
}

export function receiveMessage(message) {
    return {
        type: RECEIVE_MESSAGE,
        message
    };
}

export function getUsersList(users){
  return {
    type: USERS_LIST,
    users
  }
}

export function userInfo (user) {
    return {
        type: USER_INFO,
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

export function pickProfile(profileId) {
  return {
    type: CHOOSE_USER,
    profileId
  }
}

export function openChat() {
  return {
    type: START_CHAT
  }
}

export function closeChat() {
  return {
    type: END_CHAT
  }
}

export function deleteUser(userId) {
  return {
    type: DELETE_USER,
    userId
  }
}
