import React from 'react'
import { Button, Card, Form, Image, ListGroup } from 'react-bootstrap'
import propTypes from 'prop-types'
import useInput from '../../hooks/useInput'
export default function AddComment ({ auth, onSubmit }) {
  const [content, onContentChange, reset] = useInput('')

  function handleSubmit (e) {
    e.preventDefault()

    if (!content) return
    onSubmit(content)
    reset()

    // set content to empty
    document.querySelector('.input-markdown').textContent = ''
  }

  return (
        <Card className='mb-3'>
            <Card.Body>
                <Card.Title className="mb-3">Add Comment</Card.Title>

                <Form onSubmit={handleSubmit}>
                    <ListGroup>
                        <ListGroup.Item>
                            <div className="d-flex align-items-start py-2">
                                <Image src={auth.avatar} alt="Profile" roundedCircle className="me-2" />
                                <div className="d-inline-block w-100">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <strong>{auth.name}</strong>
                                    </div>
                                    <div>
                                        <div
                                            className="form-control input-markdown"
                                            contentEditable
                                            data-placeholder="Write your description here..."
                                            onInput={onContentChange}
                                            suppressContentEditableWarning={true}
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button variant="primary" type="submit" className="w-100 mt-3">Submit</Button>
                        </ListGroup.Item>
                    </ListGroup>

                </Form>
            </Card.Body>
        </Card>
  )
}

AddComment.propTypes = {
  auth: propTypes.object.isRequired,
  onSubmit: propTypes.func.isRequired
}
