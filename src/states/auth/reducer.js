import { AuthActionType } from './action'

const authReducer = (state = null, action = {}) => {
  switch (action.type) {
    case AuthActionType.SET_USER:
      return action.payload
    case AuthActionType.CLEAR_USER:
      return null
    default:
      return state
  }
}

export default authReducer
