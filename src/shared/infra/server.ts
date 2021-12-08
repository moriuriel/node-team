import { setupApp } from './app'

async function main() {
  const app = await setupApp()

  app.listen(8080, () =>
    console.log('Team Services is running on port 8080 ⚽️'),
  )
}

main()
