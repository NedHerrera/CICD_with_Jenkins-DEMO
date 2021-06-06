pipeline {
  agent any
  stages {
    stage('Instar dependencias') {
      steps {
        sh 'npm i'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    }
  }
}