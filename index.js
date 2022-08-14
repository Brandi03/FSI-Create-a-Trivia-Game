let userName = window.prompt ('Please enter your name:')
let userScore = 0

function playGame() {
     for(let i = 0; i < questions.length; i++){
     let question = question[i]
     let userAnswer = window.prompt(question.text)
     if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
     }
    }

    windows.alert('your score is: '+userScore)
   }