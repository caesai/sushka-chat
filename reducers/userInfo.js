import { USER_JOIN, USER_LEFT, USER_INFO} from '../actions/actions';

const initialState = {
    name: '',
    avatar: ''
};

const UserInfo = (state = initialState, action) => {
    switch(action.type) {

        case USER_INFO:
            return {
                state,
                name: action.user.name,
                avatar: action.user.avatar
            };

        default:
            return state;
    }
};

export default UserInfo;
