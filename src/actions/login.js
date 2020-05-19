import { USER_REG, USER_LOGIN } from '@/constants/actionTypes';
import * as request from '@/services' 

export const userReg = option => {
  return{
    type: USER_REG, 
    payload: request.register(option)
  }
}

export const userLogin = option => {
  return{
    type: USER_LOGIN, 
    payload: request.login(option)
  }
}
