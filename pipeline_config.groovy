application_environments {
  dev {
    npm {
      npmTestCommand = 'npm run test:development'
    }
  }
  prod {
    npm {
      npmTestCommand = 'npm run test:production'
    }
  }
}

libraries {
  docker {
    defaultImage = 'node:12.3.1'
  }
  npm {
    auditLevel = 'moderate'
  }
}
