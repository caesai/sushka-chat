import React from 'react';
import MessageBox from './components/MessageBox.jsx';
import MessageForm from './components/MessageForm.jsx';
import UsersList from './components/UsersList.jsx';
import * as actions from './actions/actions.jsx';
import { connect } from 'react-redux';
import store from './store/store.jsx';
import io from 'socket.io-client';
import * as styles from './scss/main.scss';

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
        let usersList = [
          {
            name: 'Josh Homme',
            avatar: 'img/joshik.jpg'
          },
          {
            name: 'Dima Akinsheen',
            avatar: 'img/dima.jpg'
          },
          {
            name: 'Anastasiya Gladkih',
            avatar: 'img/nastya.jpg'
          }
        ]
        // document.getElementById('vk_auth').style.display = 'none';

        store.dispatch(actions.thisUserInfo(userInfo));
        store.dispatch(actions.getUsersList(usersList));

        socket.emit('user:join', userInfo);
    // }
// });

socket.on('user:join', (user) => {
    store.dispatch(actions.userJoin(user));
});

socket.on('user:left', (user) => {
  // let list = store.Userstatus.users;
  console.log(store.getState().Userstatus);
    store.dispatch(actions.userLeft(user));
});

socket.on('chat message', (msg) => {

    store.dispatch(actions.addMessage(msg));

});

export default class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    let messages = [];
    let avatar = '';
    let users = [];
      return (
          <div className={styles.chatPage}>
              <UsersList users={users} />
              <div className={styles.chatWindow}>
                  <MessageBox messages={messages} />
                  <div className="detecting-block"></div>

                  <div className={styles.chatInput}>
                      <MessageForm avatar={avatar} />
                  </div>
              </div>
          </div>
      );
    }
};
