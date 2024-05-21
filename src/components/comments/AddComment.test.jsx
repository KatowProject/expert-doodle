import '@testing-library/jest-dom/vitest'

import { cleanup, render, screen } from '@testing-library/react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'

import CommentAdd from './CommentAdd'

vi.mock('react-redux', () => ({ useSelector: vi.fn() }))

describe('Comm')
