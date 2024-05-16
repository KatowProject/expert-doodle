import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import useInput from '../hooks/useInput'
import asyncThread from '../states/threads/action'

export default function CreateThread () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, onTitleChange] = useInput('')
  const [category, onCategoryChange] = useInput('')
  const [content, onContentChange] = useInput('')

  async function onSubmit (e) {
    e.preventDefault()

    try {
      dispatch(asyncThread.asyncCreateThreads(title, category, content))

      alert('Thread created successfully')
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }
  return (
        <Row className="justify-content-center">
            <Col xl={10} className="mb-3">
                <Link to="/" className="back-link">
                    <FaArrowLeft className="me-2" />
                    Back to Main Menu</Link>
            </Col>

            <Col xl={10}>
                <Card>
                    <Card.Header>
                        <Card.Title>Create Thread</Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={title} onInput={onTitleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" value={category} onInput={onCategoryChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Content</Form.Label>
                                <div
                                    className="form-control input-markdown"
                                    contentEditable
                                    data-placeholder="Write your description here..."
                                    onInput={onContentChange}
                                    suppressContentEditableWarning={true}
                                >
                                </div>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
  )
}
