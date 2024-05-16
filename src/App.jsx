import { useDispatch, useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import routes from './routes'
import { asyncPreloadMe } from './states/preload/action'

export default function App () {
  const isPreload = useSelector((state) => state.preload)
  const dispatch = useDispatch()
  const hasPreloaded = useRef(false)

  useEffect(() => {
    if (!hasPreloaded.current) {
      dispatch(asyncPreloadMe())
      hasPreloaded.current = true
    }
  }, [dispatch])

  if (!isPreload) {
    return null
  }

  return (
        <RouterProvider router={routes} />
  )
}
