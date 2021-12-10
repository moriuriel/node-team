import { getRepository, Repository } from 'typeorm'
import { Team } from '../entities/Team'
import {
  ITeamRepository,
  ITeam,
  IFindParams,
} from './ITeamRepository.interface'

export class TeamRepository implements ITeamRepository {
  private readonly teamRepository: Repository<Team>

  constructor() {
    this.teamRepository = getRepository(Team)
  }

  async create(team: ITeam): Promise<Team> {
    const createTeam = await this.teamRepository.create(team)

    return this.teamRepository.save(createTeam)
  }

  async findByName(name: string): Promise<Team> {
    return this.teamRepository.findOne({ where: { name } })
  }

  async findAll(params: IFindParams): Promise<Team[]> {
    const { league, name, sport } = params

    return this.teamRepository.find({
      where: {
        ...(league ? { league } : {}),
        ...(name ? { name } : {}),
        ...(sport ? { sport } : {}),
      },
    })
  }

  async findById(id: string): Promise<Team> {
    return this.teamRepository.findOne(id)
  }

  async delete(id: string): Promise<void> {
    await this.teamRepository.delete(id)
  }
}
