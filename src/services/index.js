import api from './api'
import { post, get } from '@/utils/request' 

export const login = option => post(api.login, option)
export const register = option => post(api.register, option)
export const add = option => post(api.add, option)
export const listWithPage = option => post(api.listWithPage, option)
export const findUser = option => get(api.findUser, option)
