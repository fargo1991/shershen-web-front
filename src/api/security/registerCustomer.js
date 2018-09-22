import axios from 'axios';
import CONFIG from '../config'

export default function(data){
    return axios.post(CONFIG.HOST_URL+'/signup', JSON.stringify(data), {
      headers : { "Content-Type": 'application/json' }
    } )
}
