libraries {
  docker {
    defaultImage = 'node:12.3.1'
  }
  npm {
    npmTestCommand = 'npm run test:development'
  }
}
