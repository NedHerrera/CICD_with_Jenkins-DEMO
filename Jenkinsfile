pipeline {
  agent any
  stages {
    stage('Instalar dependencias') {
      steps {
        bat 'npm i'
      }
    }
    stage('Prerarar git flow') {
      steps {
        bat 'git flow init'
      }
    }
    stage('Run tests') {
      steps {
        bat 'npm test'
      }
    }
  }
}