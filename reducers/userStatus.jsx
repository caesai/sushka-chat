import { USER_JOIN, USER_LEFT, USER_INFO, USERS_LIST, CHOOSE_USER} from '../actions/actions.jsx';

const initialState = {
    users: [],
    chosenUser: {}
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

      case CHOOSE_USER:
        let userId = action.profileId;
        let usersList = state.users;
        let chosenUser;

        for (var userProfile of usersList) {
          if (userProfile.id == userId){
            chosenUser = userProfile;
          }
        }

        return {
          users: [...state.users],
          chosenUser: chosenUser
        };

      default:
        return state;
    }
};

export default UserStatus;
