import React, { useState, useEffect } from 'react'
import { MdEdit, MdDone, MdClear } from "react-icons/md"
import './style.css'

function RecipeView({recipe, viewMode, history, updateRecipe, addRecipeVersion, versions, getVersionById}) {
  
  const {_id, description, createdAt, versionIds} = recipe
  const [mode, setMode] = useState(viewMode)
  const [descriptionValue, setDescriptionValue] = useState(description)

  useEffect(() => {
    setDescriptionValue(description)
  }, [description])

  const handleCancelEdit = () => {
    setMode('view')
    setDescriptionValue(description)
    history.push(`/recipe/${_id}`)
  }

  const handleSave = () => {
    if (description !== descriptionValue && descriptionValue.trim()) {
      addRecipeVersion({recipeId: _id, createdAt, description, versionIds})
      updateRecipe({...recipe, description: descriptionValue, versionIds: [...versionIds, ...versions] })
      setMode('view')
      history.push(`/recipe/${_id}`)
    }
  }

  const handleEdit = () => {
    setMode('edit')
    history.push(`/recipe/${_id}/edit`)
  }

  return (
    <div className='recipe-view'>
      <span className='recipe-view__time'>{new Date(createdAt).toLocaleDateString('en-GB')}</span>
      {
        mode === 'edit' 
        ? <>
            <input 
              id='recipe-decsription'
              name='recipe-decsription'
              className='recipe-view__input'
              value={descriptionValue}
              onChange={e => setDescriptionValue(e.target.value)}
              autoFocus
            />
            <label htmlFor='recipe-decsription'></label>
          </> 
        : <div className='recipe-view__description'>{descriptionValue}</div>

      }
      {
        (mode === 'view' && mode !== 'history' && mode !== 'edit' ) && <button className='recipe-view__icon edit' onClick={handleEdit}><MdEdit/></button>
      }
      {
        ( mode === 'edit' && mode !== 'history') && (
          <>
            <button className='recipe-view__icon' onClick={handleSave}><MdDone/></button>
            <button className='recipe-view__icon edit' onClick={handleCancelEdit}><MdClear/></button>
          </>
        )
      }
    </div>
  )
}

export default RecipeView