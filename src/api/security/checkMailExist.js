import CONFIG from '../config';
import axios from 'axios';

export default function(email){
  return axios.post(
    CONFIG.HOST_URL + '/check/mail/exist',
    { email : email },
    { headers : { "Content-Type" : "application/json" } });
}