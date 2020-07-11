const Recipe = require('../models/Recipe')

// @desc   Get all recipes
// @route   GET /api/recipes
// @access  public

exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find()
    return res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    })
  }
} 

// @desc   ADD recipe
// @route   POST /api/recipes
// @access  public

exports.addRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body)
    return res.status(201).json({
      success: true,
      data: recipe
    })
  } catch (error) {
    if (error.name ===  'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message)

      return res.status(400).json({
        success: false,
        error: messages
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server error',
      })
    }
  }
} 

// @desc   Get recipe
// @route   GET /api/recipes/:id
// @access  public

exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: 'No recipe found'
      })
    }

    return res.status(200).json({
      success: true,
      data: recipe
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    })
  }
} 

// @desc   update recipe
// @route   PUT /api/recipes/:id
// @access  public

exports.updateRecipe = async (req, res, next) => {
  try {
    const recipe = Recipe.findById(req.params.id)

    await recipe
      .then(recipe => {
        recipe.description = req.body.description
        recipe.versionIds = req.body.versionIds
        recipe.save()
        return res.status(200).json({
          success: true,
          data: recipe
        })
      })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: ['Server error', error],
    })
  }
} 