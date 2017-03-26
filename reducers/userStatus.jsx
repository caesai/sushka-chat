import { USER_JOIN, USER_LEFT, USER_INFO} from '../actions/actions.jsx';

const initialState = {
    users: []
};

const UserStatus = (state = initialState, action) => {
    switch(action.type) {

        case USER_JOIN:
            return {
                state,
                users: [...action.user]
            };

        case USER_LEFT:
            console.log(action.user);

            return {
                state,
                users: [...action.user]
            };

        default:
            return state;
    }
};

export default UserStatus;