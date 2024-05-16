import React from 'react'

import { Card, Row } from 'react-bootstrap'
import { RiChatNewLine } from 'react-icons/ri'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

import OverviewThreadItem from './OverviewThreadItem'
import PartialLoading from '../loading/PartialLoading'

export default function OverviewThreads ({ isLoading, threads = [] }) {
  return (
        <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className="mb-0">Threads</Card.Title>
                <Link to="/thread/new" className='btn btn-sm btn-primary'>
                    <RiChatNewLine className='me-2' />
                    Create Thread
                </Link>
            </Card.Header>
            <Card.Body>
                <Row>
                    {isLoading
                      ? <PartialLoading />
                      : threads.map((thread) =>
                        (
                            <OverviewThreadItem
                                key={thread.id}
                                thread={thread}
                                onVoteUp
                            />
                        ))
                    }
                </Row>
            </Card.Body>
        </Card>
  )
}

OverviewThreads.propTypes = {
  threads: propTypes.array.isRequired,
  isLoading: propTypes.bool
}
