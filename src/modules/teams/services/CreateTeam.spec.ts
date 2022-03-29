import { AppError } from 'shared/infra/error'
import { FakeTeamRespository } from '../repositories/FakeTeam.repository'

import { CreateTeamService } from './CreateTeam.service'

describe('CreateTeamService', () => {
  let createTeamService: CreateTeamService

  beforeEach(() => {
    const fakeTeamRepository = new FakeTeamRespository()

    createTeamService = new CreateTeamService(fakeTeamRepository)
  })

  test('Should be defined', async () => {
    expect(createTeamService).toBeInstanceOf(CreateTeamService)
  })

  test('Should be create valid Team', async () => {
    const createTeamSpy = jest.spyOn(createTeamService, 'execute')

    const result = await createTeamService.execute({
      league: 'valid-league',
      logo_url: 'valid-url',
      name: 'valid-name',
      sport: 'valid-sport',
    })

    expect(createTeamSpy).toBeCalledTimes(1)

    expect(result).toHaveProperty('id')
  })

  test('Should be validate has duplicate name', async () => {
    await createTeamService.execute({
      league: 'valid-league',
      logo_url: 'valid-url',
      name: 'valid-name',
      sport: 'valid-sport',
    })

    expect(
      createTeamService.execute({
        league: 'valid-league',
        logo_url: 'valid-url',
        name: 'valid-name',
        sport: 'valid-sport',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
