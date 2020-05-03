import mongoose from 'mongoose'
import {eventSchema} from './event'

export const companySchema = new mongoose.Schema({
  name: String,
  url: String,
  urlYt: String,
  events: [eventSchema],
  logo: String,
})

export const Company = mongoose.model('Company', companySchema)
