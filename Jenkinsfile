pipeline {
  agent any
  stages {
    stage('Instalar dependencias') {
      steps {
        bat 'npm i'
      }
    }
    stage('Build y preparar git flow') {
      steps {
        bat 'git checkout main'
      }
    }
    stage('Run tests') {
      steps {
        bat 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        bat 'git merge develop'
      }
    }
  }
}