pipeline {
    agent { docker { image 'node:12.3.1' } }
    stages {
        stage('setup AWS CLI') {
            steps {
                sh 'echo "Installing the AWS CLI"'
                sh 'curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "/tmp/awscli-bundle.zip"'
                sh 'unzip /tmp/awscli-bundle.zip -d /tmp'
                sh '/tmp/awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws'

                sh 'echo "Setting up IAM Role credentials"'
                sh 'mkdir /root/.aws'
                sh 'echo "[profile sudokrew-dev-playground]" >> /root/.aws/config'
                sh 'echo "role_arn = arn:aws:iam::470252320100:role/SudokrewJenkins" >> /root/.aws/config'
                sh 'echo "credential_source = Ec2InstanceMetadata" >> /root/.aws/config'

                sh 'aws --version'
            }
        }
        stage('setup terraform') {
            steps {
                sh 'echo "Installing Terraform"'
                sh 'curl "https://releases.hashicorp.com/terraform/0.12.24/terraform_0.12.24_linux_amd64.zip" -o "/tmp/terraform-0_12_24.zip"'
                sh 'unzip /tmp/terraform-0_12_24.zip -d /tmp'
                sh 'mv /tmp/terraform /usr/local/terraform'
                sh 'ln -sf /usr/local/terraform /usr/local/bin/terraform'

                sh 'terraform version'
            }
        }
    }
}