export const USER_AUTHORIZED = 'USER_AUTHORIZED';
export const UNAUTHORIZE_USER = 'UNAUTHORIZE_USER';

export function userAuthorized(authData){
  return {
    type : USER_AUTHORIZED,
    payload : authData
  }
}

export function unAuthorizeUser(){
  return {
    type : UNAUTHORIZE_USER,
    payload : {}
  }
}