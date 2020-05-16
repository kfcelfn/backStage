import { USER_LOGIN } from '@/constants/actionTypes';
 
const defaultState = {
  username: '',
}
 
export default function home (state = defaultState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state, 
        username: action.payload.data.user_name
      }
 
    default:
      return state
  }
}