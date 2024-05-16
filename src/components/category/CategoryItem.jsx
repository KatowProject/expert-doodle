import React from 'react'
import { Button } from 'react-bootstrap'
import propTypes from 'prop-types'

export default function CategoryItem ({ category, isActive, onChangeCategory }) {
  return (
        <Button
            variant={isActive ? 'primary' : 'outline-primary'}
            className="d-inline-block me-2 mb-2"
            onClick={() => onChangeCategory(category)}
        >
            #
            {category}
        </Button>
  )
}

CategoryItem.propTypes = {
  category: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired,
  onChangeCategory: propTypes.func.isRequired
}
