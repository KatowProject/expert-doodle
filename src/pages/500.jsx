import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Error500 () {
  return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Row>
                <Col md={12} className="text-center">
                    <h1>500</h1>
                    <h2>Internal Server Error</h2>
                    <p>Maaf, terjadi kesalahan pada server kami.</p>
                    <Link className='btn btn-secondary' to="/">
                        <FaArrowLeft className="me-2" />
                        Kembali ke Beranda</Link>
                </Col>
            </Row>
        </Container>
  )
}

export default Error500
