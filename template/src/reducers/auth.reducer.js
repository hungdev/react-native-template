import axios from '../config/axiosConfig';

import { REQUEST, SUCCESS, FAILURE } from '../utils/actionTypes';

export const ACTION_TYPES = {
  SET_USER: 'auth/SET_USER',
  SET_LANGUAGE: 'auth/SET_LANGUAGE',
  FETCH_USER: 'auth/FETCH_USER',
  CREATE_USER: 'auth/CREATE_USER',
  UPDATE_USER: 'auth/UPDATE_USER',
  DELETE_USER: 'auth/DELETE_USER',
  RESET: 'auth/RESET',
  CHANGE_FIELD: 'auth/CHANGE_FIELD'
};

const initialState = {
  loading: false,
  errorMessage: null,
  people: [],
  user: null,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
  language: null
};

// Reducer

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_USER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_USER):
    case REQUEST(ACTION_TYPES.UPDATE_USER):
    case REQUEST(ACTION_TYPES.DELETE_USER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_USER):
    case FAILURE(ACTION_TYPES.CREATE_USER):
    case FAILURE(ACTION_TYPES.UPDATE_USER):
    case FAILURE(ACTION_TYPES.DELETE_USER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_USER):
      return {
        ...state,
        loading: false,
        people: action.payload.data.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_USER):
    case SUCCESS(ACTION_TYPES.UPDATE_USER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        user: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_USER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        user: defaultValue
      };
    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case ACTION_TYPES.SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    case ACTION_TYPES.CHANGE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldData
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

const apiUrl = 'https://hungvu.net';
// Actions

export const setLanguage = (params) => {
  return {
    type: ACTION_TYPES.SET_LANGUAGE,
    language: params,
  };
};
export const login = (params) => {
  return {
    type: ACTION_TYPES.SET_USER,
    payload: params,
  };
};

export const getUser = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_USER,
    payload: axios.get(requestUrl)
  };
};

export const createUser = user => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_USER,
    payload: axios.post(apiUrl, user)
  });
  dispatch(getUsers());
  return result;
};

export const updateUser = user => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_USER,
    payload: axios.put(apiUrl, user)
  });
  dispatch(getUsers());
  return result;
};

export const deleteUser = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_USER,
    payload: axios.delete(requestUrl)
  });
  dispatch(getUsers());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});

export const changeField = (fieldName, fieldData) => ({
  type: ACTION_TYPES.CHANGE_FIELD,
  fieldName,
  fieldData
});