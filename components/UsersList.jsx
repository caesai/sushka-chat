import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store.jsx';

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

          <div className='users-list'>
              <ul className="users-ul">
                  {users.map((user, key) =>

                      <li key={key} onClick={this.toggleUser}>
                          <img src={user.avatar} className="avatar-pic" />
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
      let activeListItem = document.querySelector('.user-active');

      if (activeListItem) {
        activeListItem.dataset.active = false;
        activeListItem.className = '';
      }

      listItem.className = 'user-active';
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
