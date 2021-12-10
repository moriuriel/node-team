import { setupApp } from './app'
import configEnv from './config/env'

async function main() {
  const app = await setupApp()

  app.listen(configEnv.appPort, () =>
    console.log(`Team Services is running on port ${configEnv.appPort} ⚽️`),
  )
}

main()
