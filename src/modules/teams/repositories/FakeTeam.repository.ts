import { v4 as uuidv4 } from 'uuid'
import { Team } from '../entities/Team'
import {
  IFindParams,
  ITeam,
  ITeamRepository,
} from './ITeamRepository.interface'

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

  async findAll({ league, name, sport }: IFindParams): Promise<Team[]> {
    const params = {
      league,
      name,
      sport,
    }

    const hasParams = params?.league || params?.name || params?.sport

    const teams = this.teams.filter(team => {
      if (hasParams) {
        return (
          (params.league && params.league === team.league) ||
          (params.name && params.name === team.name) ||
          (params.sport && params.sport === team.sport)
        )
      }

      return team
    })

    return teams
  }

  async findById(id: string): Promise<Team | undefined> {
    const team = this.teams.find(team => team.id === id)

    return team
  }

  async delete(id: string): Promise<void> {
    this.teams = []

    const newTeams = this.teams.filter(team => team.id === id)

    this.teams.push(...newTeams)
  }
}
