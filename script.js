// https://github.com/thinkful-ei-heron/q-app-julio-wesley.git
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

let currentQuestion = 0;
let score = 0;

// function that will begin the quiz, this function will also be used at the end to restart the quiz
function beginQuiz(){
  // Resets stopred values to 0 to begin and restart quiz
  currentQuestion = 0;
  score = 0;
  // html posted to page
  const html = $(`
  <h2> How well do you rememeber the show The Office? Let's find out.
  </h2>`);
  $('.submit').html('start');
  $('h2').html(html);
  
  // listeneer for click to progress. 
  $('.submit').on('click', e => {
    e.preventDefault();
    renderQuestion();
    updateQuestion();
    updateScore();
  }
  );
  console.log('beginQuiz is running');
}
// function to update the question
function updateQuestion(){
  
  const html = $(`
  <ul>
    <li class="question-number">Question Number: ${currentQuestion + 1}/${STORE.questions.length}
    </li>
  <ul>`);
  $('.question-number').html(html);
  console.log('updateQuestion is running');
}
// function to update the score
function updateScore(){
  const html = $(`
  <ul>
    <li class="score">Score: ${score}
    </li>
  <ul>`);
  $('.score').html(html);
  console.log('updateScore is running');
}
// function update answer options
function updateOptions(){
  for ( let i=0; i< STORE.questions[currentQuestion].answerOptions.length; i++){
    let option = [];
    option.push(STORE.questions[currentQuestion].answerOptions[i]);
    let html = $(`
    <input type='radio' name='radio' value=${STORE.questions[currentQuestion].answerOptions[i]}>${STORE.questions[currentQuestion].answerOptions[i]}</input>
    <input type='radio' name='radio' value=${STORE.questions[currentQuestion].answerOptions[i + 1]}>${STORE.questions[currentQuestion].answerOptions[i + 1]}</input>
    <input type='radio' name='radio' value=${STORE.questions[currentQuestion].answerOptions[i + 2]}>${STORE.questions[currentQuestion].answerOptions[i + 2]}</input>
    <input type='radio' name='radio' value=${STORE.questions[currentQuestion].answerOptions[i + 3]}>${STORE.questions[currentQuestion].answerOptions[i + 3]}</input>
    `);
   
    $('.submit').parent().html(html);
  console.log('updateOptions is running');
}
// function that displays current question
function renderQuestion(){
  const html = $('<p>this is running.</p> <button class="submit">Submit</button>');

  $('.quiz-content').html(html);
  console.log('renderQuestion is running');
}

// function that checks if input is correct, and if not then input a box that will give the user the correct answer,
//if the user's input is correct than the page will also render a congratulations page
function renderResult(){

  console.log('renderResult is running');
}

// Checks the value of user inpout to correct answer and evaluates
function verifyAnswer(userAnswer) {
  // userAnswer needs to be the value of the radio button the user clicks
  //console.log(userAnswer);
  console.log(STORE.questions[currentQuestion].correctAnswer);
  //let userSelection = $('.submit[name=options]:checked', '#f1').val();
  if (userAnswer === STORE.questions[currentQuestion].correctAnswer){
    $('h1').html('you got it right!!');
  } else {
    $('h1').html(
      'you got it wrong!!');
  }
}
// function that checks if the end of the question list has been reached; if yes, than restart the quiz
function finalQuestion(){

  console.log('finalQuestion is running');
}
// function that calls all other functions
function callOtherFunctions(){
  beginQuiz();
  updateOptions();
 // renderQuestion();
  renderResult();
  finalQuestion();
  console.log('callOtherFunctions is running');
}

// jQuery function

$(callOtherFunctions);




    
  