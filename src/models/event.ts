import mongoose from 'mongoose'

export const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  price: String,
  link: String,
})

export const Event = mongoose.model('Event', eventSchema)
