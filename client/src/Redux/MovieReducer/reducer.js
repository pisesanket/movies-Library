import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, SET_FILTER, SET_SORT } from './actionTypes';

const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  filter: '',
  sort: '',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, isLoading: false, movies: action.payload };
    case FETCH_MOVIES_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
