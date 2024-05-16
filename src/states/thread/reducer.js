import { ThreadActionType } from './action'

export default function threadReducer (thread = [], action = {}) {
  switch (action.type) {
    case ThreadActionType.SET:
      return action.payload.thread
    case ThreadActionType.UPVOTE:
      return {
        ...thread,
        upVotesBy: [...thread.upVotesBy, action.payload.userId],
        downVotesBy: thread.downVotesBy.filter(
          (vote) => vote !== action.payload.userId
        )
      }
    case ThreadActionType.CANCELVOTE:
      return {
        ...thread,
        upVotesBy: thread.upVotesBy.filter(
          (vote) => vote !== action.payload.userId
        ),
        downVotesBy: thread.downVotesBy.filter(
          (vote) => vote !== action.payload.userId
        )
      }
    case ThreadActionType.DOWNVOTE:
      return {
        ...thread,
        downVotesBy: [...thread.downVotesBy, action.payload.userId],
        upVotesBy: thread.upVotesBy.filter(
          (vote) => vote !== action.payload.userId
        )
      }
    case ThreadActionType.ADD_COMMENT:
      return {
        ...thread,
        comments: [action.payload.comment, ...thread.comments]
      }
    case ThreadActionType.UPVOTE_COMMENT: {
      const updatedComments = thread.comments.slice()
      const index = updatedComments.findIndex(comment => comment.id === action.payload.commentId)
      if (index !== -1) {
        updatedComments[index] = {
          ...updatedComments[index],
          upVotesBy: [action.payload.userId, ...updatedComments[index].upVotesBy],
          downVotesBy: updatedComments[index].downVotesBy.filter(userId => userId !== action.payload.userId)
        }
      }
      return {
        ...thread,
        comments: updatedComments
      }
    }
    case ThreadActionType.CANCELVOTE_COMMENT: {
      const updatedComments = thread.comments.slice()
      const index = updatedComments.findIndex(comment => comment.id === action.payload.commentId)

      if (index !== -1) {
        updatedComments[index] = {
          ...updatedComments[index],
          upVotesBy: updatedComments[index].upVotesBy.filter(userId => userId !== action.payload.userId),
          downVotesBy: updatedComments[index].downVotesBy.filter(userId => userId !== action.payload.userId)
        }
      }

      return {
        ...thread,
        comments: updatedComments
      }
    }
    case ThreadActionType.DOWNVOTE_COMMENT: {
      const updatedComments = thread.comments.slice()
      const index = updatedComments.findIndex(comment => comment.id === action.payload.commentId)
      if (index !== -1) {
        updatedComments[index] = {
          ...updatedComments[index],
          downVotesBy: [action.payload.userId, ...updatedComments[index].downVotesBy],
          upVotesBy: updatedComments[index].upVotesBy.filter(userId => userId !== action.payload.userId)
        }
      }
      return {
        ...thread,
        comments: updatedComments
      }
    }
    default:
      return thread
  }
}
