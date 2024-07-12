import { error } from 'console';
import {
REGISTER_REQUESTQUEST,
REGISTER_SUCCESSCCESS,
REGISTER_FAILUREILURE,

LOGIN_REQUEST,
LOGIN_SUCCESS, 
LOGIN_FAILURE, 

GET_USER_REQUESTQUEST,
GET_USER_SUCCESSCCESS,
GET_USER_FAILUREILURE,

LOGOUT,
GET_USER_SUCCESS,
} from './ActionTypes'
import { stat } from 'fs';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
}

const authReducer = (state= initialState, action)=>{
  switch (action.type){
    case REGISTER_REQUESTQUEST:
    case LOGIN_REQUEST:
      return {...state, isLoading: true, error:null};
    case REGISTER_REQUESTQUEST:
      return {...state, isLoading:false};
    case REGISTER_FAILUREILURE:
    case LOGIN_FAILURE:
      return {...state, isLoading: false, error:action.payload};
    case LOGIN_SUCCESS:
      return {...state, isLoading:false};
    case GET_USER_REQUESTQUEST:
      return {...stat, isLoading:true, error:null};
    case GET_USER_SUCCESS:
      return {...state, isLoading:false, user:action.payload};
    case GET_USER_FAILUREILURE:
      return {...state, isLoading:false, error:action.payload};
    case LOGOUT:
      localStorage.removeItem("jwt");
      return {...state, jwt:null, user:null};
    default:
      return state;
  }
}

export default authReducer;