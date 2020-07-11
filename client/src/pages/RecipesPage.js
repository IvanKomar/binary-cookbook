import React, { useContext, useEffect } from 'react'
import { Recipes, Form } from '../components'
import { GlobalContext } from '../context/GlobalState'

export default function RecipesPage(props) {
  const context = useContext(GlobalContext)
  const {getRecipes, loading} = context

  useEffect(() => {
    getRecipes()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    loading 
    ? <div>Loading...</div>
    : <>
      <Form {...context}/>
      <Recipes {...context} {...props}/>
    </>
  )
}
