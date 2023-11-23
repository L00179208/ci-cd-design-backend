pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                checkout scm
            }
        }

        stage('Deploy and Start Node Server') {
            steps {
                script {
                    // Deploy your application to the local machine
                    sh 'rsync -avz --delete ./ /Users/aneeshramakrishnapillai/Documents/MasterOfDevOps/Maria/Assignments/cicd/backend_deploy'
                    
                    // Start the Node.js server
                    sh 'cd /Users/aneeshramakrishnapillai/Documents/MasterOfDevOps/Maria/Assignments/cicd/backend_deploy && npm install && npm start'
                }
            }
        }
    }
}