import React from 'react';
import MessageBox from './components/MessageBox.jsx';
import MessageForm from './components/MessageForm.jsx';
import UsersList from './components/UsersList.jsx';
import UserProfile from './components/UserProfile.jsx';
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
            // avatar: smth.photo
            name: "Cas",
            avatar: 'img/images.png',
            id: 1,
            account: [
              {
               id: 12423523,
               sum: 12000
              }
            ],
            deposit: [
              {
                id: 12676675,
                sum: 34235235
              }
            ]
        };
        let usersList = [
          {
            name: 'Josh Homme',
            avatar: 'img/joshik.jpg',
            id: 2,
            account: [
              {
                id: 634634234,
                sum: 234555
              },
              {
                id: 35636436,
                sum: 235424562
              }
            ],
            deposit: [
              {
                id: 121423564,
                sum: 1232131
              }
            ]
          },
          {
            name: 'Dima Akinsheen',
            avatar: 'img/dima.jpg',
            id: 3,
            account: [
              {
                id: 562456324,
                sum: 133
              },
              {
                id: 123466734,
                sum: 12535234
              },
              {
                id: 43634634634,
                sum: 35352.2353
              }
            ],
            deposit: [
              {
                id: 3523523,
                sum: 12312412
              },
              {
                id: 564563473,
                sum: 12312.656
              }
            ]
          },
          {
            name: 'Anastasiya Gladkih',
            avatar: 'img/nastya.jpg',
            id: 4,
            account: [
              {
                id: 8909808976,
                sum: 46546.34
              },
              {
                id: 1232526464,
                sum: 77886
              }
            ],
            deposit: [
              {
                id: 90038932,
                sum: 6788
              }
            ]
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
    let chosenUser = {};
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
            <UserProfile chosenUser={chosenUser} />
        </div>
    );
  }
};
