import { Router } from 'express'
import { CreateTeamDto } from 'modules/teams/dtos/CreateTeam.dto'
import { validateRequestData } from 'shared/infra/middleware/validateRequestData'
import { TeamController } from '../controllers/Team.controller'

const teamRouter = Router()

const teamController = new TeamController()

teamRouter.get('/', teamController.index)
teamRouter.get('/:id', teamController.find)
teamRouter.delete('/:id', teamController.delete)
teamRouter.post('/', validateRequestData(CreateTeamDto), teamController.create)

export { teamRouter }
