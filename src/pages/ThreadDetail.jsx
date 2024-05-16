import { Row, Col } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'

import { FaArrowLeft } from 'react-icons/fa'

import useTitle from '../hooks/useTitle'
import asyncThread from '../states/thread/action'

import PartialLoading from '../components/loading/PartialLoading'
import ThreadContent from '../components/thread/ThreadContent'
import Comments from '../components/comments'

export default function ThreadDetail () {
  useTitle('Thread Detail - Open Threads')

  const dispatch = useDispatch()

  const thread = useSelector((state) => state.thread)
  const auth = useSelector((state) => state.auth)

  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(asyncThread.asyncGetThread(id))
      setIsLoading(false)
    }

    fetchData()
  }, [dispatch, id])

  return (
        <>
            {isLoading
              ? <PartialLoading />
              : (
                <Row>
                    <Col xl={10} className="mb-3">
                        <Link to="/" className="back-link">
                            <FaArrowLeft className="me-2" />
                            Back to Main Menu</Link>
                    </Col>

                    <Col xl={12} className="mb-3">
                        <ThreadContent thread={thread} auth={auth} />
                    </Col>

                    <Col xl={12}>
                        <Comments thread={thread} auth={auth} />
                    </Col>
                </Row>
                )}
        </>
  )
}
