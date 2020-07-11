const express = require('express')
const router = express.Router()
const { addVersion, getVersionsByRecipeId, getVersionById } = require('../contollers/versionControllers')

router
  .route('/')
  .post(addVersion)

router
  .route('/:id')
  .get(getVersionById)

router
  .route('/recipeId/:id')
  .get(getVersionsByRecipeId)
module.exports = router