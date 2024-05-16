import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import useTitle from '../hooks/useTitle'
import Category from '../components/category'
import Leaderboard from '../components/leaderboard'
import OverviewThreads from '../components/thread/OverviewThreads'

import asyncUsers from '../states/users/action'
import asyncThreads from '../states/threads/action'
import asyncLeaderboard from '../states/leaderboard/action'

export default function HomePage () {
  useTitle('Home - Open Threads')

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  const [isLoading, setIsLoading] = useState(true)

  const threads = useSelector((state) => state.threads)
  const users = useSelector((state) => state.users)
  const leaderboards = useSelector((state) => state.leaderboard)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(asyncUsers.asyncGetUsers())
      await dispatch(asyncThreads.asyncGetThreads())
      await dispatch(asyncLeaderboard.asyncSetLeaderboard())
      setIsLoading(false)
    }

    fetchData()
  }, [dispatch])

  const categories = useMemo(() => {
    const categorySet = new Set()

    if (threads) {
      threads.forEach((thread) => {
        categorySet.add(thread.category)
      })
    }

    return Array.from(categorySet)
  }, [threads])

  const finalThreads = useMemo(() => {
    let threadList = threads

    if (category) {
      threadList = threadList.filter((thread) => thread.category === category)
    }

    return threadList.map((thread) => {
      return {
        ...thread,
        owner: users.find((user) => user.id === thread.ownerId)
      }
    })
  }, [category, threads, users])

  return (
        <Row className="g-2">
            <Col md={4}>
                <Row>
                    <Col xl={12} className="mb-3">
                        <Category isLoading={isLoading} categories={categories} />
                    </Col>

                    <Col xl={12} className="mb-3">
                        <Leaderboard isLoading={isLoading} title="Leaderboard" leaderboards={leaderboards} />
                    </Col>
                </Row>
            </Col>

            <Col md={8} id="leaderboard">
                <OverviewThreads isLoading={isLoading} threads={finalThreads} />
            </Col>
        </Row>
  )
}
