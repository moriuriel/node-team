import { v4 as uuidv4 } from 'uuid'
import { Team } from '../entities/Team'
import { ITeam, ITeamRepository } from './ITeamRepository.interface'

export class FakeTeamRespository implements ITeamRepository {
  private teams: Team[] = []

  async create(team: ITeam): Promise<Team> {
    const newTeam = new Team()

    Object.assign(newTeam, {
      id: uuidv4(),
      ...team,
      created_at: Date.now(),
      updated_at: Date.now(),
    })

    this.teams.push(newTeam)

    return newTeam
  }

  async findByName(name: string): Promise<Team | undefined> {
    const team = this.teams.find(team => team.name === name)

    return team
  }
}
