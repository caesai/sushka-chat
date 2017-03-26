import React from 'react';
import MessageBox from './Chat/MessageBox.jsx';
import MessageForm from './Chat/MessageForm.jsx';
import UsersList from './Chat/UsersList.jsx';
import * as actions from './actions/actions.jsx';
import { connect } from 'react-redux';
import store from './store/store.jsx';
import io from 'socket.io-client';

const socket = io();

// VK.Widgets.Auth("vk_auth", {
    // width: "200px",
    // onAuth: function(smth) {
    //     console.log(smth);
        let userInfo = {
            // name: smth.first_name,
            name: "Cas",
            avatar: 'img/images.png'
            // avatar: smth.photo
        };
        // document.getElementById('vk_auth').style.display = 'none';
        store.dispatch(actions.thisUserInfo(userInfo));
        socket.emit('user:join', userInfo);
    // }
// });

socket.on('user:join', (user) => {
    console.log(user);
    store.dispatch(actions.userJoin(user));
});

socket.on('user:left', (user) => {
    console.log(user);
    store.dispatch(actions.userLeft(user));
});

socket.on('chat message', (msg) => {

    store.dispatch(actions.addMessage(msg));

});

let Chat = () => {

    let messages = [];
    let avatar = '';
    let users = [];

    return (
        <div>
            <UsersList users={users} />
            <div className="chat-window">
                <MessageBox messages={messages} />
                <div className="detecting-block"></div>

                <div className="chat-input">
                    <MessageForm avatar={avatar} />
                </div>
            </div>
        </div>
    );
};

export default Chat;

