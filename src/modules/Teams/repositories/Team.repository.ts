import { getRepository, Repository } from 'typeorm'
import { Team } from '../entities/Team'
import { ITeamRepository, ITeam } from './ITeamRepository.interface'

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

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find()
  }

  async findById(id: string): Promise<Team> {
    return this.teamRepository.findOne(id)
  }

  async delete(id: string): Promise<void> {
    await this.teamRepository.delete(id)
  }
}
