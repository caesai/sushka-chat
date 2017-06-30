import React, { Component, ReactDOM } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';
import { checkHttpStatus, parseJSON } from '../actions/actions';

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
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.logIn = this.logIn.bind(this);
  }
  logIn(email, password){
    return fetch('http://localhost:8080/login', {
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
          body: JSON.stringify({'email': this.state.email, 'password': this.state.password})
      })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        if (response.access == 'granted') {
          console.log('granted');
        }
      });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return(
      <div className={styles.loginForm}>
        <h3>RBOOZ</h3>
        <form onSubmit={()=>{
          this.logIn();
        }}>
          <input name="email" value={this.state.email} onChange={this.handleInputChange} type="text" />
          <input name="password" value={this.state.password} onChange={this.handleInputChange} type="text" />
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
