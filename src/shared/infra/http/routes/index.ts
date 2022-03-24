import { Router } from 'express'
import { teamRouter } from 'modules/teams/http/routes'

const globalRouter = Router()

globalRouter.use('/teams', teamRouter)

export { globalRouter }
