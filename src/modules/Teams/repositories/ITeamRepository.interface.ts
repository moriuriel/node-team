import { Team } from '../entities/Team'

export interface ITeam {
  name: string
  logo_url: string
  sport: string
  league: string
}

export interface IFindParams {
  name?: string
  league?: string
  sport?: string
}

export interface ITeamRepository {
  create(team: ITeam): Promise<Team>
  findByName(name: string): Promise<Team>
  findAll(params: IFindParams): Promise<Team[]>
  findById(id: string): Promise<Team>
  delete(id: string): Promise<void>
}
