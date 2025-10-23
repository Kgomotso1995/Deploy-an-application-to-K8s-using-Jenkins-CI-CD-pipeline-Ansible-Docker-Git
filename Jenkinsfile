pipeline {
    agent any

    environment {
        REPO_DIR = "${WORKSPACE}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Kgomotso1995/Deploy-an-application-to-K8s-using-Jenkins-CI-CD-pipeline-Ansible-Docker-Git.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat "docker-compose -f ${REPO_DIR}\\docker-compose.yaml build"
            }
        }

        stage('Deploy Containers') {
            steps {
                bat "docker-compose -f ${REPO_DIR}\\docker-compose.yaml up -d"
            }
        }
    }

    post {
        always {
            echo "Pipeline finished ✅"
        }
        failure {
            echo "Pipeline failed ❌"
        }
        cleanup {
            echo "Cleaning up containers 🧹"
            bat "docker-compose -f ${REPO_DIR}\\docker-compose.yaml down || exit 0"
        }
    }
}
