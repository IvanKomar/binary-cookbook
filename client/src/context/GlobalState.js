import React, {useReducer, createContext} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//initial state

const initialState = {
  recipes: [],
  versions: [],
  currentRecipe: {},
  currentVersion: {},
  error: null,
  loading: true
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider component

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)


  //actions
  async function getRecipes() {
    try {
      const res = await axios.get('/api/recipes')
      dispatch({
        type: 'GET_RECIPES',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'RECIPES_ERROR',
        payload: error.responce.data.error
      })
    }
  }

  async function getRecipe(id) {
    try {
      const res = await axios.get(`/api/recipes/${id}`)
      dispatch({
        type: 'GET_RECIPE',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'RECIPE_ERROR',
        payload: error.responce.data.error
      })
    }
  }

  async function updateRecipe(data) {
    try {
      const res = await axios.put(`/api/recipes/${data._id}`, data)
      dispatch({
        type: 'UPDATE_RECIPE',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'RECIPE_ERROR',
        payload: error.responce.data.error
      })
    }
  }

  async function addRecipe(data) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/recipes', data, config)
      dispatch({
        type: 'ADD_RECIPE',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'RECIPE_ERROR',
        payload: error.responce.data.error
      })
    }
  }
  async function addRecipeVersion(oldRecipe) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/versions', oldRecipe, config)
      dispatch({
        type: 'ADD_RECIPE_VERSION',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'RECIPE_ERROR',
        payload: error.responce.data.error
      })
    }
  }
  async function getVersionsByRecipeId(recipeId) {
    try {
      const res = await axios.get(`/api/versions/recipeId/${recipeId}`)
      dispatch({
        type: 'GET_VERSIONS_BY_RECIPE_ID',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'RECIPES_ERROR',
        payload: error.responce.data.error
      })
    }
  }

  async function getVersionById(id) {
    try {
      const res = await axios.get(`/api/versions/${id}`)
      dispatch({
        type: 'GET_VERSION_BY_ID',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'RECIPE_ERROR',
        payload: error.responce.data.error
      })
    }
  }
return (
  <GlobalContext.Provider value={{
    recipes: state.recipes,
    versions: state.versions,
    error: state.error,
    loading: state.loading,
    currentRecipe: state.currentRecipe,
    currentVersion: state.currentVersion,
    addRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    addRecipeVersion,
    getVersionsByRecipeId,
    getVersionById,
  }}>
    {children}
  </GlobalContext.Provider>
  )
} 