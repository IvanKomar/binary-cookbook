const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const VersionSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: true
  }, 
  createdAt: {
    type: Date,
    required: true
  },
  recipeId: {
    type: ObjectId,
    required: true
  }
})

module.exports = mongoose.model('Version', VersionSchema)