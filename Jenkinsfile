pipeline {
    agent { docker { image 'node:10.18.0' } }
    stages {
        stage('Git Checkout') {
            steps {
                sh 'echo "Checking commits....."'

                // Skip any builds where the last commit matches the skipPattern regex
                scmSkip(deleteBuild: true, skipPattern:'.*skip ci.*')
            }
        }
        stage('test') {
            steps {
                sh 'echo "hello"'
            }
        }
    }
}