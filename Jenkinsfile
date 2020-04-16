pipeline {
    agent { docker { image 'node:12.3.1' } }
    stages {
        stage('source') {
            steps {
                git branch: "${GIT_BRANCH}",
                credentialsId: 'KrewkinsRepoAccess',
                url: 'https://github.com/sudokrew/jenkins-appsec-demo.git'
            }
        }
        stage('DEBUG') {
            steps {
                sh 'env'
            }
        }
        stage('test development') {
            steps {
                sh 'npm install'
                sh 'npm run test:development'
            }
        }
        stage('test production') {
            steps {
                sh 'npm run test:production'
            }
        }
    }
}