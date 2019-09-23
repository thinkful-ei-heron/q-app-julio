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
// let question = STORE.questions[currentQuestion];
// console.log(question);

// function that will begin the quiz, this function will also be used at the end to restart the quiz
function beginQuiz(){
  // Resets stopred values to 0 to begin and restart quiz
  let currentQuestion = 0;
  score = 0;
  // html posted to page
  const html = $(`
  <h2> How well do you rememeber the show The Office? Let's find out.
  </h2>`);
  $('.submit').html('Start');
  $('h2').html(html);
  
  // listeneer for click to progress. 
  $('.submit').on('click', e => {
    e.preventDefault();
    renderQuestion();
    updateQuestion();
    updateScore();
    updateOptions();
    currentQuestion++;
  }
  );
  console.log(currentQuestion);
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

// currentQuestion = 4 ; 
// function update answer options
function updateOptions(){
  console.log(currentQuestion);
  let optionList = STORE.questions[currentQuestion].answerOptions ;
  
  for ( let i=0; i< optionList.length; i++){
    let html = $(`
    <form class = "form">
      <input type='radio' name='radio' value=${optionList[i]}>${optionList[i]}</input><br>
      <input type='radio' name='radio' value=${optionList[i + 1]}>${optionList[i + 1]}</input><br>
      <input type='radio' name='radio' value=${optionList[i + 2]}>${optionList[i + 2]}</input><br>
      <input type='radio' name='radio' value=${optionList[i + 3]}>${optionList[i + 3]}</input><br>
      <button class="submit" id="next-question">Submit</button>
    </form>
      `);
    $('.quiz-content').parent().html(html);
  
    console.log('updateOptions is running');
  }
}


// function that displays current question
function renderQuestion(){
  console.log(STORE.questions[currentQuestion].question);
  const html = $(`<h2>${STORE.questions[currentQuestion].question}</h2>`);
  $('h2').html(html);
  console.log('renderQuestion is running');
}

// function that checks if input is correct, and if not then input a box that will give the user the correct answer,
//if the user's input is correct than the page will also render a congratulations page
function renderResult(){

  console.log('renderResult is running');
}

// Checks the value of user inpout to correct answer and evaluates
function verifyAnswer(userAnswer) {
//   
  $('.submit').on('submit', e => {
    e.preventDefault();
    let usrInput = $('input:checked').val();
    let correct = STORE[currentQuestion].correctAnswer;
    if(usrInput === correct) {
      // feedback for correct answer
    } else {
      // feedback for wrong answer 
    }
  })
// function submitAnswer() {
//   $('.jungleBox').on('submit', function (event) {
//     event.preventDefault();
//     $('.altBox').hide();
//     $('.response').show();
//     let selected = $('input:checked');       IDEA 1
//     let answer = selected.val();
//     let correct = STORE[questionNumber].correctAnswer;
//     if (answer === correct) {
//       correctAnswer();
//     } else {
//       wrongAnswer();
//     }
//   });
// }


//     let bool = (answer) => {
//     let select = STORE.questions[STORE.currentQuestion];
//     return userAnswer === select.correctAnswer;
//   }
//   $('form').on('click','#next-question', e => {
//     e.preventDefault();                                       IDEA 2
//     let usrInput = $('input[name=radio]:checked').val();
//     if (usrInput) {
//       let win = 
//     }
//   })
// }
  // $('body').on('click', '.form', e => {
  //   e.preventDefault();
  //   let curQ = STORE.questions[STORE.currentQuestion];             IDEA 3
  //   let optionSel = $('input[name=radio]:checked').val();
  //   if(!optionSel) {
  //     alert("No Option Selected");
  //   }
  // })
  // // userAnswer needs to be the value of the radio button the user clicks
  // //console.log(userAnswer);
  // console.log(STORE.questions[currentQuestion].correctAnswer);
  // //let userSelection = $('.submit[name=options]:checked', '#f1').val();      IDEA 4 - USER FEEDBACK
  // if (userAnswer === STORE.questions[currentQuestion].correctAnswer){
  //   $('h1').html('you got it right!!');
  // } else {
  //   $('h1').html(
  //     'you got it wrong!!');
  // }

// function that checks if the end of the question list has been reached; if yes, than restart the quiz
function finalQuestion(){

  console.log('finalQuestion is running');
}
// function that calls all other functions
function callOtherFunctions(){
  beginQuiz();
  renderResult();
  finalQuestion();
  console.log('callOtherFunctions is running');
}

// jQuery function

$(callOtherFunctions);