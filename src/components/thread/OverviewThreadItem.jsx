import React from 'react'
import { Card, Col, Badge } from 'react-bootstrap'
import { FaUser, FaArrowRight, FaRegCommentAlt, FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

import Tooltips from '../tooltips'
import { parsingtoHTML, truncateBody, showFormattedDate } from '../../utils'

export default function OverviewThreadItem ({ thread }) {
  return (
        <Col xl={12} className="mb-3">
            <Card className="h-100">
                <Card.Body>
                    <Card.Title>{thread.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <Badge pill bg="info" className="me-2">
                            #{thread.category}
                        </Badge>
                        <FaUser className="me-1" /> Posted by {thread.owner.name}
                    </Card.Subtitle>

                    {parsingtoHTML(truncateBody(thread.body, 500))}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <Tooltips vote={thread} type="thread" disabled={true}>
                            <button className="button-tooltip no-clicked">
                                <span className="icon-text"><FaRegCommentAlt /> {thread.totalComments}</span>
                            </button>

                            <button className="button-tooltip no-clicked">
                                {/* date */}
                                <span className="icon-text">
                                    <FaRegClock className='me-2' />
                                    {showFormattedDate(thread.createdAt)}</span>
                            </button>

                            <Link className="btn btn-primary btn-sm float-end" to={`/thread/${thread.id}`}>
                                <FaArrowRight className="me-2" />
                                Read More
                            </Link>
                        </Tooltips>
                    </small>

                </Card.Footer>
            </Card>
        </Col>
  )
}

OverviewThreadItem.propTypes = {
  thread: propTypes.object.isRequired
}
