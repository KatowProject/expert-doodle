import React from 'react'

import propTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import { FaRegClock } from 'react-icons/fa'

import Tooltips from '../tooltips'
import { parsingtoHTML, showFormattedDate } from '../../utils'

export default function ThreadContent ({ thread }) {
  return (
        <Card>
            <Card.Header>
                <Card.Title>
                    {thread.title}
                    <span className="badge bg-info float-end">#{thread.category}</span>
                </Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Text>
                    {parsingtoHTML(thread.body)}
                </Card.Text>

                <Card.Subtitle className="mb-2 text-muted">
                    <Tooltips vote={thread} type="thread">
                        <button className="button-tooltip float-end d-flex align-items-center no-clicked">
                            <img
                                src={thread.owner.avatar}
                                alt="Profile"
                                className="me-1 profile-icon"
                            />
                            <span className="icon-text">
                                {thread.owner.name}
                            </span>
                        </button>

                        <button className="button-tooltip float-end d-flex align-items-center no-clicked">
                            <span className="icon-text">
                                <FaRegClock className="me-1" />
                                {showFormattedDate(thread.createdAt)}
                            </span>
                        </button>
                    </Tooltips>
                </Card.Subtitle>
            </Card.Body>
        </Card>
  )
}

ThreadContent.propTypes = {
  thread: propTypes.object.isRequired
}
