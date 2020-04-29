pipeline {
    agent { docker { image 'node:12.3.1' } }
    stages {
        stage('install hub') {
            steps {
                sh '''
                  echo "Installing Hub"

                  curl -L https://github.com/github/hub/releases/download/v2.14.2/hub-linux-amd64-2.14.2.tgz -o /tmp/hub-linux-amd64-2.14.2.tgz
                  tar -zxvf /tmp/hub-linux-amd64-2.14.2.tgz --directory /tmp
                  mv /tmp/hub-linux-amd64-2.14.2/bin/hub /usr/local/hub
                  ln -sf /usr/local/hub /usr/local/bin/hub
                '''
            }
        }
        // stage('test development') {
        //     steps {
        //         sh 'npm install'
        //         sh 'npm run test:development'
        //     }
        // }
        stage('Commit Changes') {
            environment {
                VERSION="0.0.0"
            }
            steps {
                sh 'echo "TEST COMMIT" > tmp.txt'

                withCredentials([usernamePassword(credentialsId: 'KrewkinsRepoAccess', passwordVariable: 'GITHUB_TOKEN', usernameVariable: 'GITHUB_USERNAME')]) {
                  sh('''
                    git config --local user.email "devops+krewkins@sudokrew.com"
                    git config --local user.name "Krewkins"
                    git config --local credential.helper "!f() { echo username=\\$GITHUB_USERNAME; echo password=\\$GITHUB_TOKEN; }; f"
                    git config --global hub.protocol https
                    git checkout -B deploy/$VERSION
                    git add .
                    git commit -m "Bump $DEPLOY_ENVIRONMENT Docker image version to $VERSION"
                    hub push origin deploy/$VERSION
                    hub pull-request -b jenkins-test -m "Docker version bump: $VERSION" -m "Triggered by pull request: $CHANGE_URL" --reviewer maliaoreta
                  ''')
                }
            }
          }
    }
}