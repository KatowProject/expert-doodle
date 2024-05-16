import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'

export default function Footer () {
  const year = new Date().getFullYear()
  const user = 'User' // Replace this with actual logged in user

  return (
        <footer className="d-flex flex-wrap border-top bg-body-tertiary fixed-bottom justify-content-center py-2">
            <Container>
                <Row>
                    <Col md={4} className="text-start text-muted">
                        <p> &copy; {year} KatowProject</p>
                    </Col>
                    <Col md={8} className="text-end text-muted">
                        <p><FaUserCircle className='me-1' /> Logged in as: {user}</p>
                    </Col>
                </Row>
            </Container>
        </footer >
  )
}
