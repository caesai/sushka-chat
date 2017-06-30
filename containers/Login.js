import React, { Component, ReactDOM } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as styles from '../scss/login.scss';

const mapStateToProps = (state) => ({
  isAuthenticated   : state.auth.isAuthenticated
});

connect(
  mapStateToProps
)

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
  }
  logIn(e){
    return fetch('http://localhost:8080/login', {
      // mode: 'cors',
      method: 'post',
      credentials: 'omit',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
          body: JSON.stringify({'email': 'email', 'password': 'password'})
      })
      .then(response => {
        console.log(response);
      });
  }
  render() {
    return(
      <div className={styles.loginForm}>
        <h3>RBOOZ</h3>
        <form onSubmit={()=>{
          this.logIn();
        }}>
          <input name="login" type="text" />
          <input name="password" type="text" />
          <button type="submit" onClick={(e)=>{
            e.preventDefault();
            this.logIn();
          }}>Sign in</button>
          <button>
            <Link to='/register'>Sign up</Link>
          </button>
        </form>
      </div>
    );
  }
}
