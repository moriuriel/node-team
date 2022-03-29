import { AppError } from 'shared/infra/error'
import { FakeTeamRespository } from '../repositories/FakeTeam.repository'
import { DeleteTeamService } from './DeleteTeam.service'

describe('DeleteTeam', () => {
  let deleteService: DeleteTeamService
  let fakeTeamRepository: FakeTeamRespository

  beforeEach(async () => {
    fakeTeamRepository = new FakeTeamRespository()

    deleteService = new DeleteTeamService(fakeTeamRepository)
  })

  test('Should be defined', async () => {
    expect(deleteService).toBeInstanceOf(DeleteTeamService)
  })

  test('should be return specific team', async () => {
    const findTeamByIdSpy = jest.spyOn(deleteService, 'execute')

    const createdTeam = await fakeTeamRepository.create({
      league: 'valid-league',
      logo_url: 'valid-url',
      name: 'valid-name',
      sport: 'valid-sport',
    })

    await deleteService.execute(createdTeam.id)

    expect(findTeamByIdSpy).toBeCalledTimes(1)
  })

  test('should be throw not found error', async () => {
    expect(deleteService.execute('invalid-id')).rejects.toBeInstanceOf(AppError)
  })
})
