import { container } from 'tsyringe'

import { ITeamRepository, TeamRepository } from 'modules/Teams/repositories'

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository)
