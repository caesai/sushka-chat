import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store';
import * as actions from '../actions/actions';
import * as styles from './scss/UsersList.scss';

class UsersList extends React.Component {
  constructor(props){
    super(props);

    this.toggleUser = this.toggleUser.bind(this);
  }
  componentWillReceiveProps() {
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
                          data-user={user}
                        >

                        <div className={styles.userMenu + ' menu' + key}>
                          <ul>
                            <li onClick={(e) => {
                                  store.dispatch(actions.openChat());
                                }
                              }>Написать сообщение</li>
                            <li>Изменить</li>
                            <li onClick={(e) => {
                                store.dispatch(actions.deleteUser(userId));
                              }}>Удалить</li>
                          </ul>
                        </div>
                        <i className={"fa fa-angle-down " + styles.arrow}
                          onClick={e => {
                            let menu = document.querySelector('.menu' + key);
                            let activeMenu =  document.querySelector('.' + styles.userMenu + '.' + styles.active);

                            e.currentTarget.classList.toggle('fa-angle-down');
                            e.currentTarget.classList.toggle('fa-angle-up');
                            if (activeMenu) {
                              activeMenu.classList.toggle(styles.active);
                            }
                            menu.classList.toggle(styles.active);
                          }
                        }></i>
                      </li>
                  )}
              </ul>
          </div>
      );
    }

    /* FUNCTIONS */
    toggleUser (e) {

    }
}

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
