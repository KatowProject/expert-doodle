/**
 * Test Scenario:
 * - asyncUsers.asyncGetUsers
 *  - should dispatch actions with correctly when get users is successful.
 *  - should dispatch actions with correctly when get users is failed.
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import asyncUsers, { usersActions } from './action'

import UsersAPI from '../../services/users'

const fakeUsers = [
  {
    id: 'test',
    name: 'test',
    email: 'test@mail.com',
    avatar: 'test'
  },
  {
    id: 'test2',
    name: 'test2',
    email: 'test2@mail.com',
    avatar: 'test2'
  }
]

const sampleGetUsersResPassed = {
  status: 'success',
  message: 'ok',
  users: fakeUsers
}

const sampleGetUsersResFail = {
  status: 'failed',
  message: 'Ups, something went wrong',
  users: []
}

describe('asyncUsers.asyncGetUsers', () => {
  beforeEach(() => {
    UsersAPI._getUsers = UsersAPI.getUsers
  })

  afterEach(() => {
    UsersAPI.getUsers = UsersAPI._getUsers

    delete UsersAPI.getUsers
  })

  it('should dispatch actions with correctly when get users is successful.', async () => {
    UsersAPI.getUsers = () => Promise.resolve(sampleGetUsersResPassed)

    const dispatch = vi.fn()

    await asyncUsers.asyncGetUsers()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(usersActions.set(fakeUsers.users))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch actions with correctly when get users is failed.', async () => {
    UsersAPI.getUsers = () => Promise.resolve(sampleGetUsersResFail)

    const dispatch = vi.fn()

    await asyncUsers.asyncGetUsers()(dispatch)

    expect(dispatch).not.toHaveBeenCalledWith(usersActions.set(fakeUsers))
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toBeCalledWith(hideLoading())
  })
})
