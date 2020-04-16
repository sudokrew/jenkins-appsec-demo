pipeline {
    agent { docker { image 'node:12.3.1' } }
    stages {
        stage('DEBUG') {
            steps {
                sh 'env'
            }
        }
        stage('source') {
            steps {
                git branch: "${GIT_BRANCH}",
                credentialsId: 'KrewkinsRepoAccess',
                url: 'https://github.com/sudokrew/jenkins-appsec-demo.git'
            }
        }
    }
}