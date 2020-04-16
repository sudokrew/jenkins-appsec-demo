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
                // Parse the refspec from the branch name
                // Assumes that the branch name does NOT contain prefixing '/'
                git branch: "${GIT_BRANCH##*/}",
                credentialsId: 'KrewkinsRepoAccess',
                url: 'https://github.com/sudokrew/jenkins-appsec-demo.git'
            }
        }
        stage('DEBUG') {
            steps {
                sh 'pwd'
                sh 'ls'
                sh 'git branch'
            }
        }
    }
}