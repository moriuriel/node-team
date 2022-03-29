import { AppError } from 'shared/infra/error'
import { FakeTeamRespository } from '../repositories/FakeTeam.repository'

import { FindTeamByIdService } from './FindTeamById.service'

describe('FindTeamById', () => {
  let findTeamByIdService: FindTeamByIdService
  let fakeTeamRepository: FakeTeamRespository

  beforeEach(async () => {
    fakeTeamRepository = new FakeTeamRespository()

    findTeamByIdService = new FindTeamByIdService(fakeTeamRepository)
  })

  test('Should be defined', async () => {
    expect(findTeamByIdService).toBeInstanceOf(FindTeamByIdService)
  })

  test('should be return specific team', async () => {
    const findTeamByIdSpy = jest.spyOn(findTeamByIdService, 'execute')

    const createdTeam = await fakeTeamRepository.create({
      league: 'valid-league',
      logo_url: 'valid-url',
      name: 'valid-name',
      sport: 'valid-sport',
    })

    const team = await findTeamByIdService.execute(createdTeam.id)

    expect(findTeamByIdSpy).toBeCalledTimes(1)

    expect(team.id).toBe(createdTeam.id)
  })

  test('should be throw not found error', async () => {
    expect(findTeamByIdService.execute('invalid-id')).rejects.toBeInstanceOf(
      AppError,
    )
  })
})
