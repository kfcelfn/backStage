import { HOME_FIND_USER, HOME_ADD_USER, HOME_LIMIT_PAGE } from '@/constants/actionTypes';
import { post, get } from '@/utils/request' 
import api from '@/services/api' 

const findUser = option => {
  return{
    type: HOME_FIND_USER, 
    payload: get(api.findUser)
  }
}

const addUser = option => {
  return{
    type: HOME_ADD_USER, 
    payload: post(api.add, option)
  }
}

const limitPage = option => {
  return{
    type: HOME_LIMIT_PAGE, 
    payload: post(api.listWithPage, option)
  }
}
export {
  findUser,
  addUser,
  limitPage,
}