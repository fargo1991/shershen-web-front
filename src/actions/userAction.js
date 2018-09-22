export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const UNAUTHORIZE_USER = 'UNAUTHORIZE_USER';

export function authorizeUser(){
  return {
    type : AUTHORIZE_USER,
    payload : {}
  }
}

export function unAuthorizeUser(){
  return {
    type : UNAUTHORIZE_USER,
    payload : {}
  }
}