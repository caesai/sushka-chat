import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store.jsx';
import * as actions from '../actions/actions.jsx';
import * as styles from './scss/UsersList.scss';
let active= false;


class UsersList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
    this.toggleUser = this.toggleUser.bind(this);
  }
  componentWillReceiveProps() {
    // let {users} = this.props;
    // console.log(users);
    // this.setState({
    //   users: users
    // })
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
                          data-user={user.id}
                        >
                          <img src={user.avatar} className={styles.avatar} />
                          {user.name}

                        <div className={styles.userMenu + ' menu' + key}>
                          <ul>
                            <li>Написать сообщение</li>
                            <li>Изменить</li>
                            <li>Удалить</li>
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
        let listItem = e.currentTarget;
        let userActive = styles.userActive;
        let isActive = listItem.dataset['active'];
        let userId = listItem.dataset['user'];
        let activeListItem = document.querySelector('.' + userActive);
        let arrowUp = document.querySelector('.fa-angle-up');
        let activeMenu =  document.querySelector('.' + styles.userMenu + '.' + styles.active);

        if (activeListItem) {
          activeListItem.dataset.active = 'false';
          activeListItem.classList.toggle(userActive);
          if (arrowUp && e.target !== arrowUp) {
            arrowUp.classList.toggle('fa-angle-down');
            arrowUp.classList.toggle('fa-angle-up');
            activeMenu.classList.toggle(styles.active);
          }
        }

        listItem.classList.toggle(userActive);
        store.dispatch(actions.pickProfile(userId));
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
