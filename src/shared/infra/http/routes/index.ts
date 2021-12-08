import { Router } from 'express'
import { teamRouter } from 'modules/Teams/http/routes'

const globalRouter = Router()

globalRouter.use('/teams', teamRouter)

export { globalRouter }
