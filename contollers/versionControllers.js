const Version = require('../models/Version')
    

exports.addVersion = async (req, res, next) => {
  try {
    const version = await Version.create(req.body)
    return res.status(201).json({
      success: true,
      data: version
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

exports.getVersionsByRecipeId = async (req, res, next) => {
  try {
    const versions = await Version.find({recipeId: req.params.id})
    return res.status(200).json({
      success: true,
      count: versions.length,
      data: versions.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    })
  }
} 

exports.getVersionById = async (req, res, next) => {
  try {
    const version = await Version.findById(req.params.id)
    if (!version) {
      return res.status(404).json({
        success: false,
        error: 'No version found'
      })
    }
    return res.status(200).json({
      success: true,
      data: version
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    })
  }
} 
