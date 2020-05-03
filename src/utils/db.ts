import mongoose from 'mongoose'
import config from '../../config'

mongoose.connection.on('connected', () => {
  console.log('📡 Connection with MongoDB Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('📡 Connection with MongoDB Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.log('📡 Connection with MongoDB Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('📡 Connection with MongoDB Closed')
})

mongoose.connection.on('error', (error): void => {
  console.log('ERROR: ' + error)
})

export const connectMongo = async (): Promise => {
  await mongoose.connect(config.mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
}
