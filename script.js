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
        'A Book',
        'A Teapot',
        'A Toothbrush'
      ],
      correctAnswer:  'A Teapot'
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
let usrAns ;
// let question = STORE.questions[currentQuestion];
// console.log(question);

// function that will begin the quiz, this function will also be used at the end to restart the quiz
function beginQuiz() {
  // Resets stopred values to 0 to begin and restart quiz
  let currentQuestion = 0;
  score = 0;
  // html posted to page
  const html = $(`
  <h2> How well do you remember the show The Office? Let's find out.
  </h2>
  <form class ='start'>
    <div class="quiz-content">
      <button class="submit" type='submit'>Start</button>
    </div> 
  </form>`
  );
  // $('.start').html('Start');
  $('h2').html(html);

  // listeneer for click to progress. 
  $('.start').on('submit', e => {
    e.preventDefault();
    renderQuestion();
    updateQuestion();
    updateScore();
    generateUpdateOptionsHTML();
    addQuestionToPage();
    submitAnswer();
  }
  );
  // console.log(currentQuestion);
  // console.log('beginQuiz is running');
}
// function to update the question
function updateQuestion() {
  const html = $(`
  <ul>
    <li class="question-number">Question Number: ${currentQuestion+1}/5</li>
  <ul>`);
  $('.scoreAndQuestion').html(html);
  // console.log('updateQuestion is running');
}
// function to update the score
function updateScore() {
  const html = $(`
  <ul>
    <li class="score">Score: ${score + 1}</li>
  <ul>`);
  $('.score').html(html);
  // console.log('updateScore is running');
}

// currentQuestion = 4 ; 
// function update answer options
function generateUpdateOptionsHTML() {
  let optionList = STORE.questions[currentQuestion].answerOptions;
  let html = '<form class="questions">';
  for (let i = 0; i < optionList.length; i++) {
    html += `
      <input type='radio' name='radio' value="${optionList[i]}">${optionList[i]}</input><br>
    `;
  }
  html += `
    <button class="submit" id="next-question" type="submit">Submit</button>
    </form>
    `;
  return html;
}

function addQuestionToPage() {
  $('main').html(generateUpdateOptionsHTML());
}

function submitAnswer() {
  $('main').on('submit','.questions', e => {
    console.log('questions form submitted');
    e.preventDefault();
    //e.renderResult();
    let usrInput = $('input:checked');
    usrAns = usrInput.val();
    console.log(usrAns);
    console.log(STORE.questions[currentQuestion].correctAnswer);
  });
  verifyAnswer();
}


// function that displays current question
function renderQuestion() {
  let curQue = STORE.questions[currentQuestion].question;
  console.log(curQue);
  const html = $(`<h2>${curQue}</h2>`);
  $('h2').html(html);
  console.log('renderQuestion is running');
}

// function that checks if input is correct, and if not then input a box that will give the user the correct answer,
//if the user's input is correct than the page will also render a congratulations page
function renderRight() {
  let html = '<p>You Are Right!</p>';
  $('.question-number').after(html);
  updateScore();
  console.log('renderRight is running');
}

function renderWrong() {
  let html = '<p>You are Wrong!</p>';
  $('.question-number').after(html);
  console.log('renderWrong is running');
}

// Checks the value of user inpout to correct answer and evaluates
function verifyAnswer() {
  let correct = STORE.questions[currentQuestion].correctAnswer;
  console.log('this ran');
  console.log('is this running?')
  $('main').on('submit','.questions', e => {
    e.preventDefault();
    if (usrAns === correct) {
      console.log('you are right');
      renderRight(); 
    } else {
      console.log('you are wrong');
      renderWrong();
    }
  })
}

// function that checks if the end of the question list has been reached; if yes, than restart the quiz
function finalQuestion() {

  // console.log('finalQuestion is running');
}
// function that calls all other functions
function callOtherFunctions() {
  beginQuiz();
  //renderResult();
  //finalQuestion();
  // console.log('callOtherFunctions is running');
}

// jQuery function

$(callOtherFunctions);