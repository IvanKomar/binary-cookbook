const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: [true, 'please add some text']
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  },
  versionIds: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('Recipe', RecipeSchema)