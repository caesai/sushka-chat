import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store.jsx';
import * as styles from './scss/UsersList.scss';
let active= false;


class UsersList extends React.Component {
  constructor(props){
    super(props);

    this.toggleUser = this.toggleUser.bind(this);
  }
  componentDidMount () {
  }
  render(){
      let {users} = this.props;
      return (

          <div className={styles.usersList}>
              <ul className={styles.usersUl}>
                  {users.map((user, key) =>

                      <li key={key}
                          onClick={this.toggleUser}
                          data-active={false}
                        >
                          <img src={user.avatar} className={styles.avatar} />
                          {user.name}
                      </li>
                  )}
              </ul>
          </div>
      );
    }

    /* FUNCTIONS */
    toggleUser (e) {
        let listItem = e.currentTarget;
        let userActive = styles.userActive;
        let activeListItem = document.querySelector('.' + userActive);
        if (activeListItem) {
          activeListItem.classList.toggle(userActive);
        }
        listItem.classList.toggle(userActive);
    }
};



UsersList.propTypes = {
    users: PropTypes.array.isRequired
};

const mapStateToProps = function(store) {
    return {
        users:  store.UserStatus.users
    };
};

export default connect(mapStateToProps)(UsersList);

// export default UsersList;
