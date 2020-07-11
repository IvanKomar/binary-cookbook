import React, { useContext, useEffect } from 'react'
import { RecipeView, RecipeHistory }  from '../components'
import { GlobalContext } from '../context/GlobalState'

export default function RecipePage(props) {
  const mode = props.location.pathname.includes('edit') 
  ? 'edit' 
  : props.location.pathname.includes('history') 
    ? 'history'
    :'view'
  const context = useContext(GlobalContext)
  const { updateRecipe, getVersionsByRecipeId, addRecipeVersion, currentRecipe, versions, getRecipe, loading } = context
  useEffect(() => {
    const recipeId = props.match.params.id
    getRecipe(recipeId)
    getVersionsByRecipeId(recipeId)
  }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  , [])
  

  return ( loading 
    ? <div>loading...</div>
    : <div className='container'>
        <RecipeView 
          addRecipeVersion={addRecipeVersion}
          updateRecipe={updateRecipe}
          versions={versions} 
          recipe={currentRecipe} 
          viewMode={mode} 
          {...props} 
        />
        <RecipeHistory versions={versions} />
      </div>
  )
}
