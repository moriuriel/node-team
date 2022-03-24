import { AbstractEntity } from 'shared/infra/database/entities'
import { Column, Entity } from 'typeorm'

@Entity('teams')
export class Team extends AbstractEntity {
  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  logo_url: string

  @Column({ nullable: false })
  sport: string

  @Column({ nullable: false })
  league: string
}
