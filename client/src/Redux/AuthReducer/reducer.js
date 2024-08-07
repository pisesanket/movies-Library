// src/Redux/AuthReducer/reducer.js

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from './actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        isError: false, 
        isAuth: true
        // token: action.payload.token 
      };
    
    case LOGIN_FAILURE:
      return { 
        ...state, 
        isLoading: false,
        isAuth:true,
        isError: true 
      };
    
    default:
      return state;
  }
};

export default authReducer;
