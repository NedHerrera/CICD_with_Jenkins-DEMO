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
        sh 'git checkout origin/develop'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'git checkout origin/main && git merge origin/develop && git add . && git commit -am "Jenkins"' 
      }
    }
  }
}