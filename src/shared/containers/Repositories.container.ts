import { container } from 'tsyringe'

import { ITeamRepository, TeamRepository } from 'modules/teams/repositories'

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository)
