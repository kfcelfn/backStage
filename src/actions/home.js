import { HOME_FIND_USER, HOME_ADD_USER, HOME_LIMIT_PAGE } from '@/constants/actionTypes';
import * as request from '@/services'

export const findUser = () => {
  return{
    type: HOME_FIND_USER, 
    payload: request.findUser()
  }
}

export const addUser = option => {
  return{
    type: HOME_ADD_USER, 
    payload: request.add(option)
  }
}

export const limitPage = option => {
  return{
    type: HOME_LIMIT_PAGE, 
    payload: request.listWithPage(option)
  }
}