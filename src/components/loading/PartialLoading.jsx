import React from 'react'
import { CircleLoader } from 'react-spinners'

export default function PartialLoading () {
  return (
        <div className="d-flex justify-content-center align-items-center">
            <CircleLoader color="#000" />
        </div>
  )
}
