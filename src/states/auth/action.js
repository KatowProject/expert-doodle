import { hideLoading, showLoading } from 'react-redux-loading-bar'

import AuthAPI from '../../services/auth'
import UsersAPI from '../../services/users'
import { tokenHandler } from '../../utils/tokenHandler'

export const AuthActionType = {
  SET_USER: 'auth/set',
  CLEAR_USER: 'auth/clear'
}

export const authAction = {
  set: (user) => ({
    type: AuthActionType.SET_USER,
    payload: user
  }),
  clear: () => ({
    type: AuthActionType.CLEAR_USER
  })
}

const asyncLogin = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(showLoading())

    const response = await AuthAPI.login(email, password)
    if (response.status === 'failed') throw new Error(response.message)

    tokenHandler.setToken(response.data?.token)

    const resUser = await UsersAPI.me()
    if (resUser.status === 'fail') throw new Error(resUser.message)

    dispatch(authAction.set(resUser.user))
  } catch (error) {
    dispatch(hideLoading())
    throw error
  } finally {
    dispatch(hideLoading())
  }
}

const asyncRegister = ({ name, email, password }) => async (dispatch) => {
  try {
    dispatch(showLoading())

    const response = await AuthAPI.register(name, email, password)
    if (response.status === 'failed') throw new Error(response.message)

    if (response.error) {
      dispatch(hideLoading())
      throw response.error
    }

    dispatch(hideLoading())
  } catch (error) {
    dispatch(hideLoading())
    throw error
  } finally {
    dispatch(hideLoading())
  }
}

const asyncLogout = () => async (dispatch) => {
  dispatch(authAction.clear())
  localStorage.removeItem('token')
}

export default { asyncLogin, asyncRegister, asyncLogout }
