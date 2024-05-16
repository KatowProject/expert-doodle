import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import propTypes from 'prop-types'
import PartialLoading from '../loading/PartialLoading'
export default function Leaderboard ({ isLoading = true, title = 'Leaderboard', leaderboards }) {
  return (
        <Card>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <ListGroup>
                    {isLoading
                      ? <PartialLoading />
                      : leaderboards.map((data, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={data.user.avatar} alt={data.user.name} className="me-2" style={{ width: '40px', borderRadius: '50%' }} />
                                    {data.user.name}
                                </div>
                                <span>{data.score}</span>
                            </ListGroup.Item>
                      ))
                    }
                </ListGroup>
            </Card.Body>
        </Card>
  )
}

Leaderboard.propTypes = {
  leaderboards: propTypes.array,
  title: propTypes.string,
  isLoading: propTypes.bool
}
