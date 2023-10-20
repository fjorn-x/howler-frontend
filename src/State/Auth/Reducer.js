import {
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./ActionType";

const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      break;
    case REGISTER_USER_REQUEST:
      break;
    case GET_USER_PROFILE_REQUEST:
      return {...state, loading: true, error: null};
    case LOGIN_USER_SUCCESS:
      return {...state, loading: false, error: null, jwt: action.payload};
    case REGISTER_USER_SUCCESS:
      return {...state, loading: false, error: null, jwt: action.payload};
    case GET_USER_PROFILE_SUCCESS:
      return {...state, loading: false, error: null, user: action.payload};
    case LOGIN_USER_FAILURE:
      return {...state};
    case REGISTER_USER_FAILURE:
      return {...state};
    case GET_USER_PROFILE_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};