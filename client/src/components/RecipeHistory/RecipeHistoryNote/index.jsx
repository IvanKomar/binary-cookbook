import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function RecipeHistoryNote({_id, createdAt}) {
  return (
    <div>
      <Link className='recipe-history__note' to={`/version/${_id}/history`}>
        <span>{ new Date(createdAt).toLocaleDateString('en-GB')}</span>
      </Link>
    </div>
  )
}

export default RecipeHistoryNote