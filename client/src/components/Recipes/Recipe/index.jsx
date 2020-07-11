import React from 'react'
import { MdEdit, MdVisibility } from "react-icons/md"

import './style.css'
function Recipe({_id, createdAt, description, history}) {
  const goToRecipe = (mode = '') => {
    history.push(`/recipe/${_id}${mode}`)
  }
  
  return (
    <div className='recipe'>
      <span className='recipe__time'>{new Date(createdAt).toLocaleDateString('en-GB')}</span>
      <div className='recipe__description'>{description}</div>
      <button className='recipe__icon view' onClick={() => goToRecipe()}><MdVisibility/></button>
      <button className='recipe__icon edit' onClick={() => goToRecipe('/edit')}><MdEdit/></button>
    </div>
  )
}

export default Recipe