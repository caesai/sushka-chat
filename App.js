import React from 'react';
import * as actions from './actions/actions';
import { connect } from 'react-redux';
import store from './store/store';
import Login from './Login.js';
import * as styles from './scss/main.scss';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div>
        <Login />
      </div>
    );
  }
}
