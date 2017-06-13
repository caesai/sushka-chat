import { LOG_IN } from '../actions/actions';

const initialState = {
  isAuthenticated: false
};

export default function Authentification (state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        state,
        isAuthenticated: action.cond
      };
    default:
      return state
  }
}
