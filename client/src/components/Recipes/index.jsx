import React from 'react'
import Recipe from './Recipe'
import './style.css'

function Recipes({recipes, ...rest}) {
  return (
    <div className='recipes'>
      <h2 className='recipes__header'>Recipes</h2>
      <div className='recipes__list'>
        {
          recipes.length ?
          recipes.map(recipe => <Recipe key={recipe._id} {...recipe} {...rest}/>) :
          <h4 className='recipes__header'>No recipes in the book. Please add first</h4>
        }
      </div>
    </div>
  )
}

export default Recipes
