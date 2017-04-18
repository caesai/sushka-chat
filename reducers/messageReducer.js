import { ADD_MESSAGE, RECEIVE_MESSAGE } from '../actions/actions';

const initialState = {
    messages: []
};

export default function MessageReducer (state = initialState, action) {
    switch (action.type) {

        case ADD_MESSAGE:
            return {
                state,
                messages: [...state.messages, action.message],
                avatar: state.avatar
            };

        case RECEIVE_MESSAGE:
            return {
                state,
                messages: [...state.messages, action.message],
                avatar: state.avatar
            };

        default:
            return state;
    }

};
