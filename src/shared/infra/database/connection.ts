import { Connection, createConnection } from 'typeorm'

async function databaseConnection(): Promise<Connection> {
  return createConnection({
    type: 'postgres',
    host: 'team-dev-db',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'teams',
    entities: ['./src/modules/**/entities/*.ts'],
    migrations: ['./src/shared/infra/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/shared/infra/database/migrations',
    },
  })
}

export { databaseConnection }
