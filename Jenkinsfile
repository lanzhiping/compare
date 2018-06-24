pipeline {
    agent {
        docker {
            image 'node:8-alpine'
            args '-p 3000:3000'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Start building the project'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Start run tests'
                sh 'npm run test'
            }
        }
    }

    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir() /* clean up our workspace */
        }
        success {
            echo 'I succeeeded!'
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
        }
        changed {
            echo 'Things were different before...'
        }
    }
}