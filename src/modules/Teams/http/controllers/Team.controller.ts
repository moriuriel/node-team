import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { container } from 'tsyringe'
import {
  CreateTeamService,
  DeleteTeamService,
  FindAllTeamsService,
  FindTeamByIdService,
} from 'modules/Teams/services'

export class TeamController {
  async index(request: Request, response: Response): Promise<Response> {
    const { name, league, sport } = request.query

    const findAllTeamsService = container.resolve(FindAllTeamsService)

    const teams = await findAllTeamsService.execute({
      ...(name && { name: String(name) }),
      ...(league && { league: String(league) }),
      ...(sport && { sport: String(sport) }),
    })

    return response.status(StatusCodes.OK).json({ teams })
  }

  async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const findTeamByService = container.resolve(FindTeamByIdService)

    const team = await findTeamByService.execute(id)

    return response.status(StatusCodes.OK).json({ team })
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const deleteService = container.resolve(DeleteTeamService)

    await deleteService.execute(id)

    return response.status(StatusCodes.NO_CONTENT)
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { league, logo_url, name, sport } = request.body

    const createTeamService = container.resolve(CreateTeamService)

    const team = await createTeamService.execute({
      league,
      logo_url,
      name,
      sport,
    })

    return response.status(StatusCodes.CREATED).json({ team })
  }
}
