pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_PATH = '/usr/local/bin/docker-compose' // adjust if needed
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
                script {
                    sh "docker-compose -f ${REPO_DIR}/docker-compose.yaml build"
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                script {
                    sh "docker-compose -f ${REPO_DIR}/docker-compose.yaml up -d"
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
        failure {
            echo "Pipeline failed"
        }
    }
}

