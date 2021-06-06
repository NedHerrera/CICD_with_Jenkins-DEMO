pipeline {
  agent any
  stages {
    stage('Instar dependencias') {
      steps {
        bat 'npm i'
      }
    }
    stage('Run tests') {
      steps {
        bat 'npm test'
      }
    }
  }
}