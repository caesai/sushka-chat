import { USER_JOIN, USER_LEFT, USER_INFO, USERS_LIST} from '../actions/actions.jsx';

const initialState = {
    users: []
};

const UserStatus = (state = initialState, action) => {
    switch(action.type) {
        case USERS_LIST:
          return {
            state,
            users: action.user
          }

        case USER_JOIN:
          return {
            state,
            users: [...state.users, action.user]
          };

        case USER_LEFT:
        
          return state;

        default:
          return state;
    }
};

export default UserStatus;
