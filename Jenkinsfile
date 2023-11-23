pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your GitHub repository
                git 'https://github.com/yourusername/your-repo.git'
            }
        }

        stage('Build and Deploy') {
            steps {
                // Change directory to your Node.js application directory
                dir('/Users/aneeshramakrishnapillai/Documents/MasterOfDevOps/Maria/Assignments/cicd/backend_deploy') {
                    // Install dependencies and start your Node.js app on a different port
                    sh 'npm install'
                    sh 'node app.js --port 8112'  // Change the port as needed
                }
            }
        }
    }
}
