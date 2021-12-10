import { StatusCodes } from 'http-status-codes'
import { AppError } from 'shared/infra/error'
import { inject, injectable } from 'tsyringe'
import { Team } from '../entities/Team'
import { ITeamRepository } from '../repositories'

@injectable()
export class FindTeamByIdService {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: ITeamRepository,
  ) {}

  async execute(id: string): Promise<Team> {
    const team = await this.teamRepository.findById(id)

    if (!team)
      throw new AppError({
        message: `Team with ID ${id} not found`,
        statusCode: StatusCodes.NOT_FOUND,
      })

    return team
  }
}
