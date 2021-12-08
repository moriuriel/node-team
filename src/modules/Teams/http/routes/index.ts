import { Router } from 'express'
import { CreateTeamDto } from 'modules/Teams/dtos/CreateTeam.dto'
import { validateRequestData } from 'shared/infra/middleware/validateRequestData'
import { TeamController } from '../controllers/Team.controller'

const teamRouter = Router()

const teamController = new TeamController()

teamRouter.post('/', validateRequestData(CreateTeamDto), teamController.create)

export { teamRouter }
