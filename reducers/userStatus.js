import { USER_JOIN, USER_LEFT, USER_INFO, USERS_LIST, CHOOSE_USER, DELETE_USER, START_CHAT, END_CHAT} from '../actions/actions';

const initialState = {
    users: [],
    chosenUser: {},
    chat: false
};

const UserStatus = (state = initialState, action) => {
    switch(action.type) {
      case USERS_LIST:
        return {
          state,
          users: [...action.users]
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
          chosenUser: chosenUser,
          chat: state.chat
        };

      case DELETE_USER:
        let deletedUser = action.userId;
        let list = state.users;

        for (var idx in list) {

          if (list[idx].id == deletedUser){
            list.splice(idx, 1);
          }
        }

        return {
          users: [...list],
          chosenUser: {},
          chat: false
        };

      case START_CHAT:
        return {
          users: [...state.users],
          chosenUser: state.chosenUser,
          chat: true
        };

      case END_CHAT:
        return {
          users: [...state.users],
          chosenUser: state.chosenUser,
          chat: false
        };

      default:
        return state;
    }
};

export default UserStatus;
