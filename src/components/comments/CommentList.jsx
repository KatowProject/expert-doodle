import React from 'react'
import propTypes from 'prop-types'
import { ListGroup, Image } from 'react-bootstrap'
import { parsingtoHTML, showFormattedDate } from '../../utils'
import Tooltips from '../tooltips'

export default function CommentList ({ comment }) {
  return (
        <ListGroup.Item>
            <div className="d-flex align-items-start py-2">
                <Image src={comment.owner.avatar} alt="Profile" roundedCircle className="me-2" />
                <div className="d-inline-block w-100">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <strong>{comment.owner.name}</strong>
                        <div>{showFormattedDate(comment.createdAt)}</div>
                    </div>
                    <div>{parsingtoHTML(comment.content)}</div>

                    <div className="mt-2">
                        <Tooltips vote={comment} type="comment" />
                    </div>
                </div>
            </div>
        </ListGroup.Item>
  )
}

CommentList.propTypes = {
  comment: propTypes.object.isRequired
}
