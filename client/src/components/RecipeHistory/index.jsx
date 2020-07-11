import React from 'react'
import RecipeHistoryNote from './RecipeHistoryNote'
import { Link } from 'react-router-dom'
import './style.css'

function RecipeHistory({versions}) {
  return (
    <div className='recipe-history'>
      <h2>Recipe versions</h2>
      {
        versions.map(recipe => <RecipeHistoryNote key={recipe._id} {...recipe}/>)
      }
      {
        versions.length ? <Link to={`/recipe/${versions[0].recipeId}`}>go to current Recipe version</Link> : null
      }
    </div>
  )
}

export default RecipeHistory