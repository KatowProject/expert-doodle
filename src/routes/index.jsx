import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '../components/layout/MainLayout'
import HomePage from '../pages/HomePage'
import LeaderboardPage from '../pages/LeaderboardPage'
import { AuthLayout } from '../components/layout/AuthLayout'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import ThreadDetail from '../pages/ThreadDetail'
import CreateThread from '../pages/CreateTread'
import Error500 from '../pages/500'
import Error404 from '../pages/404'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error500 />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'leaderboard',
        element: <LeaderboardPage />
      },
      {
        path: 'thread/new',
        element: <CreateThread />
      },
      {
        path: 'thread/:id',
        element: <ThreadDetail />
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  },
  // not found
  {
    path: '*',
    element: <Error404 />
  }
])

export default routes
