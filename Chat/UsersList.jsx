import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store/store.jsx';

let UsersList = ({users}) => {
    return (
        <div className='users-list'>
            <ul className="users-ul">
                {users.map((user, key) =>

                    <li key={key}>
                        {console.log(user)}

                        <img src={user.avatar} className="avatar-pic" />
                        {user.name}
                    </li>
                )}
            </ul>
        </div>
    );
};

UsersList.propTypes = {
    users: PropTypes.array.isRequired
};

const mapStateToProps = function(store) {
    return {
        users:  store.UserStatus.users
    };
};

UsersList = connect(mapStateToProps)(UsersList);

export default UsersList;