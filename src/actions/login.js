import { USER_REG, USER_LOGIN } from '@/constants/actionTypes';
import { post } from '@/utils/request' 
import api from '@/services/api' 

const userReg = option => {
  return{
    type: USER_REG, 
    payload: post(api.register, option)
  }
}

const userLogin = option => {
  return{
    type: USER_LOGIN, 
    payload: post(api.login, option)
  }
}
export {
  userReg,
  userLogin,
}