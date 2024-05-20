/**
 * Test Scenario:
 * - asyncUsers.asyncGetUsers
 *  - should return users when type given is 'users/set'.
 *  - should return users when type given is unknown.
 *
 */

import { describe, expect, it } from 'vitest'

import usersReducer from './reducer'
import { UsersActionType } from './action'

const users = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  name: `user${i}`,
  email: `email@user${i}.com`,
  avatar: `avatar${i}`
}))

describe('usersReducer', () => {
  it('should return users when type given is "users/set".', () => {
    const action = {
      type: UsersActionType.SET,
      payload: {
        users
      }
    }

    const result = usersReducer([], action)

    expect(result).toEqual(users)
  })

  it('should return users when type given is unknown.', () => {
    const action = {
      type: 'unknown',
      payload: {
        users
      }
    }

    const result = usersReducer(users, action)

    expect(result).toEqual(users)
  })
})
