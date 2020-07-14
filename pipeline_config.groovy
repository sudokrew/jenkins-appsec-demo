libraries {
  docker {
    defaultImage = 'node:12.3.1'
  }
  npm {
    npmRegistryScopeName = 'sudokrew'
    npmCredentialsId = 'GH'
    npmRunCommand = 'test:development'
  }
  semantic_release {
    semanticReleaseArgs = '--dry-run'
  }
}
