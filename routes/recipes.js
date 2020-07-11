const express = require('express')
const router = express.Router()
const { getRecipes, addRecipe, getRecipe, updateRecipe } = require('../contollers/recipeControllers')

router
  .route('/')
  .get(getRecipes)
  .post(addRecipe)

router
  .route('/:id')
  .get(getRecipe)
  .put(updateRecipe)

module.exports = router