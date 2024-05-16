import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import propTypes from 'prop-types'
import AddComment from './AddComment'
import CommentList from './CommentList'

import asyncThread from '../../states/thread/action'

export default function Comments ({ thread, auth }) {
  const dispatch = useDispatch()

  async function onCommentSubmit (comment) {
    dispatch(asyncThread.asyncAddComment(thread.id, comment))
  }

  return (
        <>
            <AddComment auth={auth} onSubmit={onCommentSubmit} />

            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title className="mb-3">Comments</Card.Title>

                    {
                        thread.comments.map((comment, index) => {
                          return (
                                <CommentList key={index} comment={comment} />
                          )
                        })
                    }

                </Card.Body>
            </Card>

        </>
  )
}

Comments.propTypes = {
  thread: propTypes.object.isRequired,
  auth: propTypes.object.isRequired
}
