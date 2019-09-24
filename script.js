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
      question: 'Kevin\'s family has a secret family recipe for?',
      answerOptions: [
        'Lasagna',
        'Chilli',
        'Tacos',
        'Meatballs'
      ],
      correctAnswer: 'Chilli'
    },
    { //3
      question: 'What is the name of Jan\'s talented assistant?',
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
  ],
  correctMessage: 'You are right!',
  wrongMessage: `You are wrong! The correct answer is!`,
  answered: false,
  quizStarted: false,
  currentQuestion: 0,
  score: 0,
  usrAns: null,
  answerCorrect: null
};
// get the right Question displayed, get scoring and feedback working.
// function that will begin the quiz, this function will also be used at the end to restart the quiz

function beginQuiz() {
  // listener for click to progress. 
  $('main').on('submit', '.start', e => {
    // alert('start button clicked.');
    e.preventDefault();
    STORE.quizStarted = true;
    render();
  }
  ); 
}
function endResults() {
  let resultHTML =
    `<p aria-label="Your score is ${STORE.score} / 5"> Your Score is ${STORE.score} / 5 ! </p>
     <button aria-label="Restart" id="nextQuestion">Restart Quiz</button>`;
  STORE.currentQuestion = -1 ;
  STORE.score = 0 ;
  STORE.quizStarted = false;
  $('main').html(resultHTML);
  console.log('hey there');
}
function handleNextQuestionButton(){
  $('main').on('click','#nextQuestion', e => {
    e.preventDefault();
    STORE.currentQuestion++;
    if(STORE.currentQuestion !== 5) {
      STORE.answered = false;
      render();
    } else {
      endResults();
    }
  });
}
function render(){
  if (STORE.answered === true){
    let html = `
  <p></p>
  <button aria-label="Next Question" id="nextQuestion">Next Question</button>
  `;
    $('main').html(html);
  }
  else if(STORE.correctAnswer === true){
    //const html = `<h3>this is here correct</h3>`;
  }
  else if (STORE.quizStarted === false){
    const html = $(`
  <h2> How well do you remember the show The Office? Let's find out.
  </h2>
  <form class="start" role="form">
    <div class="quiz-content">
      <button aria-label="Start Quiz" class="submit" type='submit'>Start</button>
    </div> 
  </form>`
    );
    $('main').html(html);
  } else {
    addQuestionToPage();
    statusOfQuiz();
    verifyAnswer();
  }
}
function statusOfQuiz() {
  const html = `
  <ul>
     <li class="question-number">Question Number: ${STORE.currentQuestion+1}/5</li>
     <li class="score">Score: ${STORE.score}</li>
  </ul>
  `;
  $('h2').after(html);
}
// function update answer options
function generateUpdateOptionsHTML() {
  let optionList = STORE.questions[STORE.currentQuestion].answerOptions;
  let html = '<form class="questions">';
  for (let i = 0; i < optionList.length; i++) {
    html += `
      <input type='radio' aria-label="${optionList[i]}" name='radio' value="${optionList[i]}">${optionList[i]}</input><br>
    `;
  }
  html += `
    <button aria-label="submit" class="submit" id="next-question" type="submit">Submit</button>
    </form>
    `;
  return html;
}
function addQuestionToPage() {
  // generates current options
  let options = generateUpdateOptionsHTML();
  // add the current question
  let question = `<h2>${STORE.questions[STORE.currentQuestion].question}</h2>`;
  $('main').html(question + options);
}
function submitAnswer() {
  $('main').on('submit','.questions', e => {
    e.preventDefault();
    STORE.answered = true;
    let usrInput = $('input:checked');
    STORE.usrAns = usrInput.val();
    render();
    verifyAnswer();
    console.log(STORE.currentQuestion);
  });
}
function verifyAnswer() {
  let correct = STORE.questions[STORE.currentQuestion].correctAnswer;
  if(STORE.usrAns === correct) {
    $('p').html(STORE.correctMessage);
    STORE.score++;
  } else {
    $('p').html(`You were wrong! The correct answer was "${correct}"`);
  }
}
// function that calls all other functions
function callOtherFunctions() {
  beginQuiz();
  submitAnswer();
  handleNextQuestionButton();
  render();
}
//alert( STORE.questions.correctAnswer.currentQuestion);
// jQuery function
$(callOtherFunctions);