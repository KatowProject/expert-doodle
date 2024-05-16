import { hideLoading, showLoading } from 'react-redux-loading-bar'

import CommentServices from '../../services/comments'
import ThreadServices from '../../services/threads'

export const ThreadActionType = {
  SET: 'thread/set',
  UPVOTE: 'thread/upvote',
  DOWNVOTE: 'thread/downvote',
  CANCELVOTE: 'thread/cancelvote',
  ADD_COMMENT: 'thread/addcomment',
  UPVOTE_COMMENT: 'thread/upvotecomment',
  DOWNVOTE_COMMENT: 'thread/downvotecomment',
  CANCELVOTE_COMMENT: 'thread/cancelvotecomment'
}

export const threadAction = {
  setThread (thread) {
    return {
      type: ThreadActionType.SET,
      payload: {
        thread
      }
    }
  },
  upvoteThread (userId, threadId) {
    return {
      type: ThreadActionType.UPVOTE,
      payload: {
        userId,
        threadId
      }
    }
  },
  downvoteThread (userId, threadId) {
    return {
      type: ThreadActionType.DOWNVOTE,
      payload: {
        userId,
        threadId
      }
    }
  },
  cancelVoteThread (userId, threadId) {
    return {
      type: ThreadActionType.CANCELVOTE,
      payload: {
        userId,
        threadId
      }
    }
  },
  addComment (comment) {
    return {
      type: ThreadActionType.ADD_COMMENT,
      payload: {
        comment
      }
    }
  },
  upvoteComment (userId, commentId) {
    return {
      type: ThreadActionType.UPVOTE_COMMENT,
      payload: {
        userId,
        commentId
      }
    }
  },
  downvoteComment (userId, commentId) {
    return {
      type: ThreadActionType.DOWNVOTE_COMMENT,
      payload: {
        userId,
        commentId
      }
    }
  },
  cancelVoteComment (userId, commentId) {
    return {
      type: ThreadActionType.CANCELVOTE_COMMENT,
      payload: {
        userId,
        commentId
      }
    }
  }
}

function asyncGetThread (threadId) {
  return async (dispatch) => {
    try {
      dispatch(showLoading())
      const response = await ThreadServices.getThread(threadId)

      dispatch(threadAction.setThread(response.data.detailThread))
    } catch (error) {
      dispatch(hideLoading())
      throw new Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncUpvoteThread (threadId) {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading())

      const { auth } = getState()

      const response = await ThreadServices.upVote(threadId)

      if (response.error) {
        dispatch(hideLoading())
        throw new Error(response.error)
      }

      dispatch(threadAction.upvoteThread(auth.id, threadId))
    } catch (error) {
      dispatch(hideLoading())
      throw new Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncDownvoteThread (threadId) {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading())

      const { auth } = getState()

      const response = await ThreadServices.downVote(threadId)

      if (response.error) {
        dispatch(hideLoading())
        throw new Error(response.error)
      }

      dispatch(threadAction.downvoteThread(auth.id, threadId))
    } catch (error) {
      dispatch(hideLoading())
      throw new Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncCancelVoteThread (threadId) {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading())
      const { auth } = getState()

      const response = await ThreadServices.cancelVote(threadId)

      if (response.error) {
        dispatch(hideLoading())
        throw new Error(response.error)
      }

      dispatch(threadAction.cancelVoteThread(auth.id, threadId))
    } catch (error) {
      dispatch(hideLoading())
      throw new Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncAddComment (threadId, comment) {
  return async (dispatch) => {
    try {
      dispatch(showLoading())

      const response = await CommentServices.addComment(threadId, comment)

      if (response.error) {
        dispatch(hideLoading())
        throw new Error(response.error)
      }

      dispatch(threadAction.addComment(response.data.comment))
    } catch (error) {
      dispatch(hideLoading())
      throw new Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncUpvoteComment (threadId, commentId) {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading())
      const { auth } = getState()

      const response = await CommentServices.upVote(threadId, commentId)

      if (response.error) {
        dispatch(hideLoading())
        throw new Error(response.error)
      }

      dispatch(threadAction.upvoteComment(auth.id, commentId))
    } catch (error) {
      dispatch(hideLoading())
      throw new Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncDownvoteComment (threadId, commentId) {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading())
      const { auth } = getState()

      const response = await CommentServices.downVote(threadId, commentId)

      if (response.error) {
        dispatch(hideLoading())
        throw new Error(response.error)
      }

      dispatch(threadAction.downvoteComment(auth.id, commentId))
    } catch (error) {
      dispatch(hideLoading())
      throw new Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncCancelVoteComment (threadId, commentId) {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoading())
      const { auth } = getState()

      const response = await CommentServices.cancelVote(threadId, commentId)

      if (response.error) {
        dispatch(hideLoading())
        throw new Error(response.error)
      }

      dispatch(threadAction.cancelVoteComment(auth.id, commentId))
    } catch (error) {
      dispatch(hideLoading())
      throw new Error(error)
    } finally {
      dispatch(hideLoading())
    }
  }
}

export default {
  asyncGetThread,
  asyncUpvoteThread,
  asyncDownvoteThread,
  asyncCancelVoteThread,
  asyncAddComment,
  asyncUpvoteComment,
  asyncDownvoteComment,
  asyncCancelVoteComment
}
