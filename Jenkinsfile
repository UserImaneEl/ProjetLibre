pipeline {
    agent any

    stages {
        // Checkout stage
        stage('Checkout') {
            steps {
                // Retrieve sources from GitHub repository
                git branch: 'master', url: 'https://github.com/UserImaneEl/ProjetLibre.git'
            }
        }

        // Build Backend (all backend services)
        stage('Build Backend') {
            steps {
                dir('./ProjetLibreBack/discovery-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/labo-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/analyse-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/contactLabo-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/adresse-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/dossier-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/epreuve-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/examen-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/patient-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/testAnalyse-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/utilisateur-service') {
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/gateway-service') {
                    bat 'mvn clean install -DskipTests'
                }
            }
        }

        // Build Frontend (Angular)
        stage('Build Frontend') {
            steps {
                dir('./ProjetLibreFront/projetfront') {
                    bat 'npm install'
                    bat 'npm run build --prod'
                }
            }
        }

        // Deploy with Docker Compose
        stage('Deploy with Docker Compose') {
            steps {
                bat 'docker-compose -f docker-compose.yml up --build -d'
            }
        }
    }

    post {
        success {
            echo 'The build and deployment were successful!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
