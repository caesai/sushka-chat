import React from 'react';
import MainBox from '../components/MainBox';
import UsersList from '../components/UsersList';
import UserProfile from '../components/UserProfile';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import store from '../store/store';
import * as styles from '../scss/main.scss';

// VK.Widgets.Auth("vk_auth", {
    // width: "200px",
    // onAuth: function(smth) {
    //     console.log(smth);
let userInfo = {
    id: 1,
    name: "Cas",
    avatar: 'img/images.png',
    status: 'offline',
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

// store.dispatch(actions.userJoin());
// store.dispatch(actions.userInfo(userInfo));


export default class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    let users = [];
    return (
      <div className={styles.chatPage}>
        // <UsersList users={users} />
        <MainBox />
      </div>
    );
  }
}
