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
    try {
      dispatch(showLoading())
      const response = await UsersAPI.getUsers()
      if (response.status === 'failed') throw new Error(response.message)

      dispatch(usersActions.set(response.users))
    } catch (error) {
      dispatch(hideLoading())
      throw error
    } finally {
      dispatch(hideLoading())
    }
  }
}

export default {
  asyncGetUsers
}
