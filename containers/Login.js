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
  }
  render() {
    return(
      <div className={styles.loginForm}>
        <h3>RBOOZ</h3>
        <form>
          <input name="login" type="text" />
          <input name="password" type="text" />
          <button type="submit" onClick={(e)=>{
            e.preventDefault();
          }}>Sign in</button>
          <button>
            <Link to='/register'>Sign up</Link>
          </button>
        </form>
      </div>
    );
  }
}
