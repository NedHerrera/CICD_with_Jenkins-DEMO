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
        sh 'git checkout origin/main && git merge origin/develop && git commit -m "Jenkins" && git push --set-upstream origin main' 
      }
    }
  }
}