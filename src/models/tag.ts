import mongoose from 'mongoose'

export const tagSchema = new mongoose.Schema({
  name: String,
})

export const Tag = mongoose.model('Tag', tagSchema)
