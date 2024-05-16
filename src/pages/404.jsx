import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Error404 () {
  return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Row>
                <Col md={12} className="text-center">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>Sorry, the page you are looking for does not exist.</p>
                    <Button variant="primary" href="/">Go to Homepage</Button>
                </Col>
            </Row>
        </Container>
  )
}

export default Error404
