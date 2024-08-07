// src/Redux/AuthReducer/action.js

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from './actionTypes';
import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  
  try {
    const response = await axios.post('https://reqres.in/api/login', credentials);
    const { token } = response.data;
    
    dispatch({ 
      type: LOGIN_SUCCESS
    //   payload: { token, isAuth: true }
    });
    
    // Optionally, save token to localStorage or handle redirection here
    localStorage.setItem('token', token);

  } catch (error) {
    dispatch({ 
      type: LOGIN_FAILURE,
      payload: error.message 
    });
  }
};
