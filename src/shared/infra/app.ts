import 'reflect-metadata'
import 'express-async-errors'
import express, { Express } from 'express'

import 'shared/containers'
import { databaseConnection } from './database'
import { globalRouter } from './http/routes'
import { exceptionFilter } from './error'

async function setupApp(): Promise<Express> {
  const app = express()

  await databaseConnection()

  app.use(express.json())

  app.use(globalRouter)

  app.use(exceptionFilter)

  return app
}

export { setupApp }
