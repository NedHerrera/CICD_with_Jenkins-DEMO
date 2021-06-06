pipeline {
  agent any
  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'npm i'
      }
    }
    stage('Build y preparar git flow') {
      steps {
        sh 'git checkout origin/main'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'git merge origin/develop'
      }
    }
    stage('Deploy') {
      steps {
        sh 'git merge develop'
      }
    }
  }
}