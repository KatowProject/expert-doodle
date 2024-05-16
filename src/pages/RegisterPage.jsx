import React from 'react'

import { Form, Row, Col, Button, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import useTitle from '../hooks/useTitle'
import useInput from '../hooks/useInput'
import authActions from '../states/auth/action'

export function RegisterPage () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useTitle('Register - Open Threads')

  const [name, setName] = useInput('')
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')

  async function handleSubmit (event) {
    event.preventDefault()
    try {
      await dispatch(authActions.asyncRegister({ name, email, password }))
      navigate('/login')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
        <Row className="justify-content-center">
            <Col md={4}>
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <Image src="/logo.png" width="250px" alt="Logo" className="me-2" />
                    <h2 className='fw-bold'>Open Threads</h2>
                </div>

                <Form onSubmit={handleSubmit}>
                    <h2 className="text-center mb-4">Register</h2>
                    <Form.Group className="mb-4">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onInput={setName} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onInput={setEmail} />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onInput={setPassword} />
                    </Form.Group>

                    <Button type="submit" className="w-100 mb-4">Sign up</Button>

                    <div className="text-center">
                        <p>Already have account? <Link to="/login">Login</Link></p>
                    </div>
                </Form>
            </Col>
        </Row>
  )
}
