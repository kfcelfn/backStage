import { HOME_FIND_USER } from '@/constants/actionTypes';

const defaultState = {
  findUser: []
}
export default function detail(state = defaultState, action) {
  switch (action.type) {
    case HOME_FIND_USER:
      return {
        ...state, 
        findUser: action.payload.users
      }
 
    default:
      return state
  }
}