import { FakeTeamRespository } from '../repositories/FakeTeam.repository'
import { FindAllTeamsService } from './FindAllTeams.service'

describe('CreateTeamService', () => {
  let findAllTeamsService: FindAllTeamsService
  let fakeTeamRepository: FakeTeamRespository

  beforeEach(async () => {
    fakeTeamRepository = new FakeTeamRespository()

    findAllTeamsService = new FindAllTeamsService(fakeTeamRepository)
  })

  test('Should be defined', async () => {
    expect(findAllTeamsService).toBeInstanceOf(FindAllTeamsService)
  })

  test('Should be return teams', async () => {
    const firstTeam = await fakeTeamRepository.create({
      league: 'valid-league',
      logo_url: 'valid-url',
      name: 'valid-name',
      sport: 'valid-sport',
    })

    const secondTeam = await fakeTeamRepository.create({
      league: 'valid-league',
      logo_url: 'valid-url',
      name: 'invalid-name',
      sport: 'valid-sport',
    })

    const result = await findAllTeamsService.execute({})

    expect(result).toEqual([firstTeam, secondTeam])
  })

  test('Should be return team equal param name', async () => {
    const firstTeam = await fakeTeamRepository.create({
      league: 'valid-league',
      logo_url: 'valid-url',
      name: 'valid-name',
      sport: 'valid-sport',
    })

    await fakeTeamRepository.create({
      league: 'valid-league',
      logo_url: 'valid-url',
      name: 'invalid-name',
      sport: 'valid-sport',
    })

    const result = await findAllTeamsService.execute({ name: 'valid-name' })

    expect(result).toEqual([firstTeam])
  })
})
