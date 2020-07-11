import React, { useContext, useEffect } from 'react'
import { RecipeView, RecipeHistory }  from '../components'
import { GlobalContext } from '../context/GlobalState'

export default function VersionPage(props) {
  const mode = 'history'
  const { versions, getVersionById, currentVersion, loading } = useContext(GlobalContext)
  

  useEffect(() => {
    getVersionById(props.match.params.versionId)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    loading 
    ? <div>loading...</div>
    : <div className='container'>
      <RecipeView 
        getVersionById={getVersionById}
        versions={versions} 
        recipe={currentVersion} 
        viewMode={mode} 
        {...props} 
      />
      <RecipeHistory viewMode={mode} versions={versions} currentVersion={currentVersion} />
    </div>
  )
}
