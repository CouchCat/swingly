import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: {
    name: 'Bob',
    email: 'bob@test.com'
  }
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.SET_CURRENT_USER_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;