import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateTeamService } from '../../services'

export class TeamController {
  async create(request: Request, response: Response): Promise<Response> {
    const { league, logo_url, name, sport } = request.body

    const createTeamService = container.resolve(CreateTeamService)

    const team = await createTeamService.execute({
      league,
      logo_url,
      name,
      sport,
    })

    return response.status(201).json({ team })
  }
}
