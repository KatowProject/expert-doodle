import React from 'react'

import propTypes from 'prop-types'
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import asyncThread from '../../states/thread/action'

export default function Tooltips ({ vote, children, type, disabled = false }) {
  const dispatch = useDispatch()
  const { id } = useParams()

  const auth = useSelector((state) => state.auth)

  function handleVoteUp () {
    if (disabled) return

    switch (type) {
      case 'thread':
        vote.upVotesBy.includes(auth.id)
          ? dispatch(asyncThread.asyncCancelVoteThread(vote.id))
          : dispatch(asyncThread.asyncUpvoteThread(vote.id))

        break
      case 'comment':
        vote.upVotesBy.includes(auth.id)
          ? dispatch(asyncThread.asyncCancelVoteComment(id, vote.id))
          : dispatch(asyncThread.asyncUpvoteComment(id, vote.id))

        break
      default:
    }
  }

  function handleVoteDown () {
    if (disabled) return

    switch (type) {
      case 'thread':
        vote.downVotesBy.includes(auth.id)
          ? dispatch(asyncThread.asyncCancelVoteThread(vote.id))
          : dispatch(asyncThread.asyncDownvoteThread(vote.id))

        break
      case 'comment':
        vote.downVotesBy.includes(auth.id)
          ? dispatch(asyncThread.asyncCancelVoteComment(id, vote.id))
          : dispatch(asyncThread.asyncDownvoteComment(id, vote.id))
        break
      default:
    }
  }

  return (
        <div className="button-tooltips text-muted">
            <button
                className={`button-tooltip ${disabled ? 'no-clicked' : ''}`}
                onClick={handleVoteUp}
            >
                <span className="icon-text">
                    {vote.upVotesBy.includes(auth.id)
                      ? <FaThumbsUp className='me-1' />
                      : <FaRegThumbsUp className='me-1' />
                    }
                    {vote.upVotesBy.length}
                </span>
            </button>
            <button
                className={`button-tooltip ${disabled ? 'no-clicked' : ''}`}
                onClick={handleVoteDown}
            >
                <span className="icon-text">
                    {vote.downVotesBy.includes(auth.id)
                      ? <FaThumbsDown className='me-1' />
                      : <FaRegThumbsDown className='me-1' />
                    }
                    {vote.downVotesBy.length}
                </span>
            </button>

            {children}
        </div>
  )
}

Tooltips.propTypes = {
  vote: propTypes.object.isRequired,
  children: propTypes.node,
  type: propTypes.oneOf(['thread', 'comment']),
  disabled: propTypes.bool
}
