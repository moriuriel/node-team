import { inject, injectable } from 'tsyringe'
import { StatusCodes } from 'http-status-codes'
import { AppError } from 'shared/infra/error'
import { Team } from '../entities/Team'
import { ITeamRepository } from '../repositories'

interface ITeam {
  name: string
  logo_url: string
  sport: string
  league: string
}

@injectable()
export class CreateTeamService {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: ITeamRepository,
  ) {}

  async execute({ league, logo_url, name, sport }: ITeam): Promise<Team> {
    const hasTeamWithName = await this.teamRepository.findByName(name)

    if (hasTeamWithName)
      throw new AppError({
        message: 'Name already exists',
        statusCode: StatusCodes.UNPROCESSABLE_ENTITY,
      })

    return this.teamRepository.create({ league, logo_url, name, sport })
  }
}
