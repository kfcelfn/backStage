import { HOME_FIND_USER, HOME_LIMIT_PAGE } from '@/constants/actionTypes';

const defaultState = {
  findUser: [],
  limitPage: [],
  total: 0
}
export default function detail(state = defaultState, action) {
  switch (action.type) {
    case HOME_FIND_USER:
      return {
        ...state, 
        findUser: action.payload.users
      }
    case HOME_LIMIT_PAGE:
      return {
        ...state, 
        limitPage: action.payload.result.list,
        total: action.payload.result.count
      }

    default:
      return state
  }
}