import { AUTHORIZE_USER, UNAUTHORIZE_USER } from '../actions/userAction';

const initialState = {
  user : {
    authorized: false,
    name: 'Vasya'
  }
}

export default function (state =  initialState, action) {

  switch(action.type){

    case AUTHORIZE_USER: {
      return Object.assign( state, { authorized : true })
    } break;

    case UNAUTHORIZE_USER: {
      return Object.assign( state, { authorized : false })
    } break;

    default: { return state }

  }

  return state;
}