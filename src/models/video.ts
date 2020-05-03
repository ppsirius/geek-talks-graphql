import mongoose from 'mongoose'
import {categorySchema} from './category'
import {tagSchema} from './tag'
import {companySchema} from './company'

export const videoSchema = new mongoose.Schema({
  name: String,
  category: [categorySchema],
  tags: [tagSchema],
  company: companySchema,
  publishedDate: Date,
  views: Number,
  commnents: Number,
  duration: Number,
  poster: String,
})

export const Viedo = mongoose.model('Viedo', videoSchema)
