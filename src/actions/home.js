import { HOME_FIND_USER } from '@/constants/actionTypes';
import { post, get } from '@/utils/request' 
import api from '@/services/api' 

const findUser = option => {
  return{
    type: HOME_FIND_USER, 
    payload: get(api.findUser)
  }
}
export {
  findUser,
}