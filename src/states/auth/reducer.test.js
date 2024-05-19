/**
 * Test Scenario:
 *  - authReducer
 *    - It should return auth state with correctly when action is SET_USER.
 *    - It should return auth state with correctly when action is CLEAR_USER.
 *    - It should return auth state with correctly when action is unknown.
 */

import authReducer from './reducer'
import { AuthActionType } from './action'
import { describe, expect, it, vi } from 'vitest'

const auth = {
  id: 'test',
  name: 'test',
  email: 'test@mail.com',
  avatar: 'test'
}

describe('authReducer', () => {
  it('It should return auth state with correctly when action is SET_USER.', () => {
    const action = {
      type: AuthActionType.SET_USER,
      payload: auth
    }

    const state = authReducer(null, action)

    expect(state).toEqual(auth)
  })

  it('It should return auth state with correctly when action is CLEAR_USER.', () => {
    const action = {
      type: AuthActionType.CLEAR_USER
    }

    const state = authReducer(null, action)

    expect(state).toBeNull()
  })

  it('It should return auth state with correctly when action is unknown.', () => {
    const action = {
      type: 'unknown'
    }

    const state = authReducer(null, action)

    expect(state).toEqual(null)
  })
})
