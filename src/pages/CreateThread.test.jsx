import '@testing-library/jest-dom/vitest'

import { cleanup, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import CreateThread from './CreateTread'

vi.mock('react-redux', () => ({ useDispatch: vi.fn() }))

describe('CreateThread Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render CreateThread component', () => {
    render(
        <BrowserRouter>
          <CreateThread />
        </BrowserRouter>
    )

    expect(screen.getByText('Create Thread')).toBeInTheDocument()
  })

  it('should the title value same as input value', async () => {
    const titleVal = 'My Title'
    render(
        <BrowserRouter>
          <CreateThread />
        </BrowserRouter>
    )

    const title = screen.getByLabelText('Title')

    await userEvent.type(title, titleVal)

    expect(title).toHaveValue(titleVal)
  })

  it('should the category value same as input value', async () => {
    const categoryVal = 'My Category'
    render(
        <BrowserRouter>
            <CreateThread />
        </BrowserRouter>
    )

    const category = screen.getByLabelText('Category')

    await userEvent.type(category, categoryVal)

    expect(category).toHaveValue(categoryVal)
  })

  it('should the content value same as input value', async () => {
    const contentVal = 'My Content'
    render(
        <BrowserRouter>
            <CreateThread />
        </BrowserRouter>
    )

    const content = screen.getByTestId('content')

    await userEvent.type(content, contentVal)

    expect(content.textContent).toBe(contentVal)
  })
})
