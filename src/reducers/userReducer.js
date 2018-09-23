import { USER_AUTHORIZED, UNAUTHORIZE_USER } from '../actions/userAction';

const initialState = {
    authorized: false,
    name: 'Неизвестный пользователь',

    authData : {
      access_token : null,
      refresh_token : null
    }
}

export default function (state =  initialState, action) {

  switch(action.type){

    case USER_AUTHORIZED: {

      updateAuthDataLocalStorage(action.payload)

      return Object.assign( state, { authorized : true, authData: action.payload })
    } break;

    case UNAUTHORIZE_USER: {
      return Object.assign( state, { authorized : false })
    } break;

    default: { return state }

  }

  return state;
}

function updateAuthDataLocalStorage(authData){
  let oldData = window.localStorage.getItem('authData');
  if (oldData !== authData) window.localStorage.setItem('authData', JSON.stringify(authData))
}