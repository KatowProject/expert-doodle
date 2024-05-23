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
                                <Form.Label htmlFor='title'>Title</Form.Label>
                                <Form.Control id='title' type="text" value={title} onChange={onTitleChange} placeholder='Title'/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor='category'>Category</Form.Label>
                                <Form.Control id='category' type="text" value={category} onChange={onCategoryChange} placeholder='Category' />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor='content'>Content</Form.Label>
                              <div
                                    data-testid='content'
                                    id='content'
                                    className="form-control input-markdown"
                                    contentEditable
                                    data-placeholder="Write your description here..."
                                    onInput={onContentChange}
                                    suppressContentEditableWarning={true}
                                    aria-label='Content'
                                >
                                </div>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100" role="button">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
  )
}
