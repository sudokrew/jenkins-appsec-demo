libraries {
  docker {
    defaultImage = 'node:12.3.1'
  }
  npm {
    npmRegistryScopeName = 'sudokrew'
    npmCredentialsId = 'GH'
  }
  semantic_release {
    semanticReleaseArgs = '--dry-run'
  }
}
