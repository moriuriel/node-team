import { Connection, createConnection } from 'typeorm'

import configEnv from 'shared/infra/config/env'

async function databaseConnection(): Promise<Connection> {
  return createConnection({
    type: 'postgres',
    host: configEnv.dbHost,
    port: Number(configEnv.dbPort),
    username: configEnv.dbUser,
    password: configEnv.dbPass,
    database: configEnv.dbName,
    entities: ['./src/modules/**/entities/*.ts'],
    migrations: ['./src/shared/infra/database/migrations/*.ts'],
    synchronize: false,
    cli: {
      migrationsDir: './src/shared/infra/database/migrations',
    },
  })
}

export { databaseConnection }
