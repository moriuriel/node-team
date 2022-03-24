import { StatusCodes } from 'http-status-codes'
import { AppError } from 'shared/infra/error'
import { inject, injectable } from 'tsyringe'
import { ITeamRepository } from '../repositories'

@injectable()
export class DeleteTeamService {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: ITeamRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const hasTeam = await this.teamRepository.findById(id)

    if (!hasTeam)
      throw new AppError({
        message: `Team with ID ${id} not found`,
        statusCode: StatusCodes.NOT_FOUND,
      })

    await this.teamRepository.delete(id)
  }
}
