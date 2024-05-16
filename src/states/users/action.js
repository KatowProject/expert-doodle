import { hideLoading, showLoading } from 'react-redux-loading-bar'
import UsersAPI from '../../services/users'

export const UsersActionType = {
  SET: 'users/set'
}

export const usersActions = {
  set (users) {
    return {
      type: UsersActionType.SET,
      payload: {
        users
      }
    }
  }
}

function asyncGetUsers () {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const users = await UsersAPI.getUsers()

      dispatch(usersActions.set(users.data.users))
    } catch (error) {
      dispatch(hideLoading())
    } finally {
      dispatch(hideLoading())
    }
  }
}

export default {
  asyncGetUsers
}
