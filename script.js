'use strict';

// Store is the questions, answers, correct answers, and score.
// Store is a global object.
const STORE = {
  questions: [//1
    {
      question: 'What did Jim get Pam as a secret Santa gift?',
      answerOptions: [
        'An iPod', 
        'A book', 
        'A teapot', 
        'A toothbrush'
      ],
      correctAnswer: 'A teapot'
    },
    { //2
      question: 'Kevin\'s family has a secret family recipie for?',
      answerOptions: [
        'Lasagna', 
        'Chilli', 
        'Tacos', 
        'Meatballs'
      ],
      correctAnswer: 'Chilli'
    },
    { //3
      question: 'What is the name of Jan\'s talanted assistant?',
      answerOptions: [
        'David Wallace', 
        'Pete', 
        'Clayton', 
        'Hunter'
      ],
      correctAnswer: 'Hunter'
    },
    { //4
      question: 'The office olympics included what sport?',
      answerOptions: [
        'Table-tennis', 
        'Sputnick', 
        'Flonkerton', 
        'Blomp-top'
      ],
      correctAnswer: 'Flonkerton'
    },
    { //5
      question: 'This quiz is over, "catch you on..."?',
      answerOptions: [
        '...the flip side.', 
        '...the flippity flop.', 
        '...the other side.', 
        'Toothbrush.'
      ],
      correctAnswer: '...the flippity flop.'
    }
  ]
};

// function that will begin the quiz, this function will also be used at the end to restart the quiz
function beginQuiz(){

    console.log('beginQuiz is running');
}
// function to update the question
function updateQuestion(){

    console.log('updateQuestion is running');
}
// function to update the score
function updateScore(){

    console.log('updateScore is running');
}
// function update answer options
function updateOptions(){

    console.log('updateOptions is running');
}
// function that displays current question
function renderQuestion(){

    console.log('renderQuestion is running');
}
// function that will render score and question 
function renderStatus(){

    console.log('renderStatus is running');
}
// function that checks if input is correct, and if not then input a box that will give the user the correct answer,
    //if the user's input is correct than the page will also render a congratulations page
function renderResult(){

    console.log('renderResult is running');
}
// function that checks if the end of the question list has been reached; if yes, than restart the quiz
function finalQuestion(){

    console.log('finalQuestion is running');
}
// function that calls all other functions
function callOtherFunctions(){
    beginQuiz();
    updateQuestion();
    updateScore();
    updateOptions();
    renderQuestion();
    renderStatus();
    renderResult();
    finalQuestion();
    console.log('callOtherFunctions is running');
}

// jQuery function

$(callOtherFunctions);




    
  