pipeline {
    agent any
    
    tools {
        nodejs 'Node16'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                withCredentials([
                    string(credentialsId: 'browserstack-username', variable: 'BROWSERSTACK_USERNAME'),
                    string(credentialsId: 'browserstack-access-key', variable: 'BROWSERSTACK_ACCESS_KEY'),
                ]) {
                    sh 'npm run browserstack-mocha-test'
                }
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: '**/wdio-*-reporter-logs/**', allowEmptyArchive: true
            junit '**/junit-results/*.xml'
        }
    }
}