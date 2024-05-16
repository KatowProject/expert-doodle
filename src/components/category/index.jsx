import { Card } from 'react-bootstrap'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

import CategoryItem from './CategoryItem'
import PartialLoading from '../loading/PartialLoading'

export default function Category ({ isLoading, categories }) {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState(null)

  function onChangeCategory (category) {
    if (category === activeCategory) {
      setActiveCategory(null)
      navigate('/')
    } else {
      setActiveCategory(category)
      navigate(`/?category=${category}`)
    }
  }

  return (
        <>
            <Card>
                <Card.Header>
                    <Card.Title>Category</Card.Title>
                </Card.Header>
                <Card.Body>
                    {isLoading
                      ? <PartialLoading />
                      : categories.map((category, index) => (
                            <CategoryItem
                                key={index}
                                category={category}
                                isActive={activeCategory === category}
                                onChangeCategory={onChangeCategory}
                            />
                      ))
                    }
                </Card.Body>
            </Card>
        </>
  )
}

Category.propTypes = {
  categories: propTypes.array.isRequired,
  isLoading: propTypes.bool
}
