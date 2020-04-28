pipeline {
    agent { docker { image 'node:12.3.1' } }
    stages {
        stage('source') {
            steps {
                git 'https://github.com/sudokrew/jenkins-appsec-demo'
            }
        }
        stage('audit') {
            steps {
                sh 'npm audit'
            }
        }
        // stage('test development') {
        //     steps {
        //         sh 'npm install'
        //         sh 'npm run test:development'
        //     }
        // }
        // stage('test production') {
        //     steps {
        //         sh 'npm run test:production'
        //     }
        // }
    }
}