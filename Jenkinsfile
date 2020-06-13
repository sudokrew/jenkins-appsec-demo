pipeline {
    agent { docker { image 'node:10.18.0' } }
    stages {
        // stage('Checkout') {
        //     steps {
        //         scmSkip(deleteBuild: true, skipPattern:'.*\\[skip ci\\].*')
        //     }
        // }
        stage('test') {
            steps {
                sh 'echo "hello"'
            }
        }
    }
}