import { Team } from '../entities/Team'

export interface ITeam {
  name: string
  logo_url: string
  sport: string
  league: string
}

export interface ITeamRepository {
  create(team: ITeam): Promise<Team>
  findByName(name: string): Promise<Team>
  findAll(): Promise<Team[]>
  findById(id: string): Promise<Team>
  delete(id: string): Promise<void>
}
