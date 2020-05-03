import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import config from '../config'
// import typeDefs from './typeDefs'
// import resolvers from './resolvers'
import {connectMongo} from './utils/db'
import graphqlSchema from './schema'

const start = async (): Promise<void> => {
  try {
    await connectMongo()

    const app = express()

    const server = new ApolloServer({
      schema: graphqlSchema,
      playground: {
        settings: {
          'editor.theme': 'dark',
        },
        tabs: [
          {
            // query: defaultQuery,
          },
        ],
      },
    })

    server.applyMiddleware({app})

    app.listen({port: config.port}, () =>
      console.log(`🚀 Server ready at:\nhttp://${config.host}:${config.port}${server.graphqlPath}`),
    )
  } catch (err) {
    console.log(err)
  }
}

start()
