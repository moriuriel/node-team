import { inject, injectable } from 'tsyringe'
import { Team } from '../entities/Team'
import { ITeamRepository } from '../repositories'

interface IFindParams {
  name?: string
  league?: string
  sport?: string
}
@injectable()
export class FindAllTeamsService {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: ITeamRepository,
  ) {}

  async execute({ league, name, sport }: IFindParams): Promise<Team[]> {
    return this.teamRepository.findAll({ league, name, sport })
  }
}
