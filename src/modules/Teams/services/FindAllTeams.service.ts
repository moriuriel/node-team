import { inject, injectable } from 'tsyringe'
import { Team } from '../entities/Team'
import { ITeamRepository } from '../repositories'

@injectable()
export class FindAllTeamsService {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: ITeamRepository,
  ) {}

  async execute(): Promise<Team[]> {
    return this.teamRepository.findAll()
  }
}
