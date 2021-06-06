pipeline {
  agent any
  tools {
    
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

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