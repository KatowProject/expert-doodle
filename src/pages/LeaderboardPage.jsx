import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'

import asyncLeaderboard from '../states/leaderboard/action'
import Leaderboard from '../components/leaderboard'
import useTitle from '../hooks/useTitle'

export default function LeaderboardPage () {
  useTitle('Leaderboard - Open Threads')

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  const leaderboards = useSelector((state) => state.leaderboard)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(asyncLeaderboard.asyncSetLeaderboard())
      setIsLoading(false)
    }

    fetchData()
  }, [dispatch])

  return (
        <Row className='justify-content-center'>
            <Col md={8}>
                <Row>
                    <Col xl={12} className="mb-3">
                        <Leaderboard isLoading={isLoading} leaderboards={leaderboards} />
                    </Col>
                </Row>
            </Col>
        </Row>
  )
}
