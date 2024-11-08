pipeline {
    agent any

    stages {
        // Checkout stage
        stage('Checkout') {
            steps {
                // Récupérer les sources du dépôt GitHub
                git branch: 'master', url: 'https://github.com/UserImaneEl/ProjetLibre.git'
            }
        }

        // Build Backend (discovery-service, labo-service, gateway-service)
        stage('Build Backend') {
            steps {
                dir('./ProjetLibreBack/discovery-service') {
                    // Construction du service discovery sans tests
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/labo-service') {
                    // Construction du service labo sans tests
                    bat 'mvn clean install -DskipTests'
                }
                dir('./ProjetLibreBack/gateway-service') {
                    // Construction du service gateway sans tests
                    bat 'mvn clean install -DskipTests'
                }
            }
        }

        // Build Frontend (Angular)
        stage('Build Frontend') {
            steps {
                dir('./ProjetLibreFront/projetfront') {
                    // Installer les dépendances npm
                    bat 'npm install'

                    // Construire l'application Angular en mode production
                    bat 'npm run build --prod'
                }
            }
        }

        // Deploy with Docker Compose
        stage('Deploy with Docker Compose') {
            steps {
                // Lancer les services avec Docker Compose
                bat 'docker-compose -f docker-compose.yml up --build -d'
            }
        }
    }

    post {
        // Si le pipeline réussit
        success {
            echo 'Le build et le déploiement ont réussi !'
        }
        // Si le pipeline échoue
        failure {
            echo 'Échec du build ou du déploiement.'
        }
    }
}
