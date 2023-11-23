
pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'ci-cd-pipeline-assignment-backend'
    }
    stages {
        stage('Checkout') {
            steps {
                // Checks out the source code from Git repository
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                // Building Docker image
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }
        stage('Deploy Docker Image') {
            steps {
                // Pushing image to Docker registry (optional)
                // script {
                //     docker.withRegistry('https://registry.hub.docker.com', 'docker-credentials-id') {
                //         docker.image(DOCKER_IMAGE).push()
                //     }
                // }
                // Deploying to a Docker container
                sh 'docker run -d -p 8111:3333 ${DOCKER_IMAGE}'
            }
        }
    }
}
