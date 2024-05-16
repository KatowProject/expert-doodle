import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LoadingBar from 'react-redux-loading-bar'

export function AuthLayout () {
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    if (auth) {
      navigate('/')
    }
  }, [auth, navigate])
  return (
        <>
            <LoadingBar style={{ backgroundColor: '#ff0000', height: '5px' }} />
            <main className='d-flex align-items-center justify-content-center vh-100'>
                <Container fluid>
                    <Outlet />
                    <ScrollRestoration />
                </Container>
            </main>
        </>
  )
}
