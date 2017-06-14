import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
// import * as styles from '../scss/main.scss';

const mapStateToProps = (state) => ({
  isAuthenticated    : state.Authentification.isAuthenticated
});

connect(mapStateToProps)

export class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h3>RBOOZ</h3>
        <Login />
      </div>
    );
  }
}
