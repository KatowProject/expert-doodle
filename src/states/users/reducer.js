import { UsersActionType } from './action'

export default function usersReducer (users = [], action = {}) {
  switch (action.type) {
    case UsersActionType.SET:
      return action.payload.users
    default:
      return users
  }
}
