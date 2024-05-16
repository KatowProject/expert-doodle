import { hideLoading, showLoading } from 'react-redux-loading-bar'

import threadsAPI from '../../services/threads'

export const ThreadsActionType = {
  CREATE: 'threads/create',
  SET: 'threads/set',
  UP_VOTE: 'threads/upVote',
  DOWN_VOTE: 'threads/downVote',
  CANCEL_VOTE: 'threads/cancelVote',
  UPVOTE_COMMENT: 'threads/upVoteComment'
}

export const threadsAction = {
  create (thread) {
    return {
      type: ThreadsActionType.CREATE,
      payload: {
        thread
      }
    }
  },
  set (threads) {
    return {
      type: ThreadsActionType.SET,
      payload: {
        threads
      }
    }
  },
  upVoteThread (userId, threadId) {
    return {
      type: ThreadsActionType.UP_VOTE,
      payload: {
        userId,
        threadId
      }
    }
  },
  cancelVoteThread (userId, threadId) {
    return {
      type: ThreadsActionType.CANCEL_VOTE,
      payload: {
        userId,
        threadId
      }
    }
  },
  downVoteThread (userId, threadId) {
    return {
      type: ThreadsActionType.DOWN_VOTE,
      payload: {
        userId,
        threadId
      }
    }
  }
}

function asyncCreateThreads (title, category, body) {
  return async (dispatch) => {
    try {
      dispatch(showLoading())
      const response = await threadsAPI.addThread(title, category, body)

      dispatch(threadsAction.create(response.data.thread))
    } catch (error) {
      dispatch(hideLoading())
      throw new Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncGetThreads () {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const threads = await threadsAPI.getThreads()

      dispatch(threadsAction.set(threads.data.threads))
    } catch (error) {
      dispatch(hideLoading())
    } finally {
      dispatch(hideLoading())
    }
  }
}

export default { asyncCreateThreads, asyncGetThreads }
