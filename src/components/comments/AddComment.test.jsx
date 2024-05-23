/**
 * Test Scenario:
 * - AddComment Component
 *  - It should render AddComment component.
 *  - It should get error while not providing auth prop.
 */

import '@testing-library/jest-dom/vitest'

import { cleanup, render, screen } from '@testing-library/react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import AddComment from './AddComment'

vi.mock('react-redux', () => ({ useSelector: vi.fn() }))

const auth = {
  id: 'test',
  name: 'test',
  email: 'test@mail.com',
  avatar: 'test'
}

describe('AddComment Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render AddComment component', () => {
    useSelector.mockReturnValue({ auth })

    render(
      <BrowserRouter>
        <AddComment auth={useSelector().auth} onSubmit={vi.fn()} />
      </BrowserRouter>
    )
    expect(screen.getByText('Add Comment')).toBeInTheDocument()
  })

  it('should input value same as input value', async () => {
    useSelector.mockReturnValue({ auth })

    const commentValue = 'My Content'

    render(
      <BrowserRouter>
        <AddComment auth={useSelector().auth} onSubmit={vi.fn()} />
      </BrowserRouter>
    )
    const content = screen.getByTestId('content')
    await userEvent.type(content, commentValue)

    expect(content.textContent).toBe(commentValue)
  })
})
