/**
 * Test Scenario:
 *
 * - asyncAuth.asyncLogin
 *  - It should dispatch actions with correctly when login is successful.
 *  - It should dispatch actions with correctly when login is failed.
 *
 * - asyncAuth.asyncLogout
 *  - It should dispatch actions with correctly when logout is successful.
 */

import asyncAuth, { authAction } from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import Auth from '../../services/auth'
import Users from '../../services/users'

const fakeUser = {
  id: 'test',
  name: 'test',
  email: 'test@mail.com',
  avatar: 'test'
}

global.localStorage = {
  removeItem: vi.fn(),
  setItem: vi.fn(),
  getItem: vi.fn()
}

const sampleLoginResPassed = {
  status: 'success',
  message: 'ok',
  token: 'eyJpZCI6ImRpbWFzMiIsIm5hbWUiOiJEaW1.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9EaW1hcyBTYXB1dHJhIiwicGhvdG8iOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1EaW1hcyBTYXB1dHJhJmJhY2tncm91bmQ9cmFuZG9tIiwiaXNfcGVybWFuZW50IjpmYWxzZSwiaWF0IjoxNjYzODQwNzY0fQ._HrzpinFYX_m9WfvM-lGCdVrnhnaGHhzt1e6eATE1Iw'

}

const sampleLoginResFail = {
  status: 'failed',
  message: 'Ups, something went wrong',
  token: ''

}

const sampleMeResPassed = {
  status: 'success',
  message: 'ok',
  user: fakeUser

}

const sampleRegisterResPassed = {
  status: 'success',
  message: 'User created',
  user: fakeUser

}

const sampleRegisterResFail = {
  status: 'failed',
  message: 'Ups, something went wrong',
  user: {}
}

describe('asyncAuth.asyncLogin', () => {
  beforeEach(() => {
    Auth._login = Auth.login
    Users._me = Users.me
  })

  afterEach(() => {
    Auth.login = Auth._login
    Users.me = Users._me

    delete Auth._login
    delete Users._me
  })

  it('should dispatch actions with correctly when login is successful', async () => {
    Auth.login = () => Promise.resolve(sampleLoginResPassed)
    Users.me = () => Promise.resolve(sampleMeResPassed)

    const dispatch = vi.fn()
    await asyncAuth.asyncLogin({ email: 'test@gmail.com', password: '123' })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(authAction.set(sampleMeResPassed.user))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch actions with correctly when login is failed', async () => {
    Auth.login = () => Promise.resolve(sampleLoginResFail)

    const dispatch = vi.fn()
    await expect(asyncAuth.asyncLogin({ email: 'fail@gmail.com', password: '123' })(dispatch))
      .rejects
      .toThrowError(sampleLoginResFail.message)
      .finally(() => {
        expect(dispatch).toHaveBeenCalledWith(showLoading())
        expect(dispatch).not.toHaveBeenCalledWith(authAction.set(sampleMeResPassed.user))
        expect(dispatch).toHaveBeenCalledWith(hideLoading())
      })
  })
})

describe('asyncAuth.asyncLogout', () => {
  it('should dispatch actions with correctly when logout is successful', async () => {
    const dispatch = vi.fn()
    await asyncAuth.asyncLogout()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(authAction.clear())
  })
})

describe('asyncAuth.asyncRegister', () => {
  beforeEach(() => {
    Auth.register = Auth._register
  })

  afterEach(() => {
    Auth.register = Auth._register

    delete Auth._register
  })

  it('should dispatch actions with correctly when register is successful', async () => {
    Auth.register = () => Promise.resolve(sampleRegisterResPassed)

    const dispatch = vi.fn()
    await asyncAuth
      .asyncRegister(
        {
          name: 'test',
          email: 'mail@test.com',
          password: '123'
        }
      )(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch actions with correctly when register is failed', async () => {
    Auth.register = () => Promise.resolve(sampleRegisterResFail)

    const dispatch = vi.fn()
    await expect(asyncAuth
      .asyncRegister(
        {
          name: 'test',
          email: 'tesst',
          password: '123'
        }
      )(dispatch))
      .rejects
      .toThrowError(sampleRegisterResFail.message)
      .finally(() => {
        expect(dispatch).toHaveBeenCalledWith(showLoading())
        expect(dispatch).toHaveBeenCalledWith(hideLoading())
      })
  })
})
