import axios from 'axios';
import CONFIG from '../config'

export default function (login){
  return axios.post(
    CONFIG.HOST_URL+'/check/login/exist',
    JSON.stringify({login : login }),
    { headers : { "Content-Type" : "application/json" } });
}