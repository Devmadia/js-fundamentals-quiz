var startQuizBtn = document.getElementById("start-btn");
var questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let randomQuestions, currentQuestionIndex 
startQuizBtn.addEventListener("click", startQuiz); 

//var timerEl = document.getElementById("timer");

// variable for high scores to be stored to
// variable for timer

// variable for questions
// function to call high scores
// function for user initials for high score association and localStorage
// function for null answer with user initials before continuing
// function to store high scores to localStorage
// function to clear high scores

// function for timer countdown
function startTimer() {
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function() {
        seconds--;  // seconds decrement after countdown begins
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
        }
        // after clearInterval, game must end
    }, 
        1000);
}

// penalty code
//timeRemaining = timeRemaining - 10;
//timeEl.textContent = timeRemaining;

// function to startQuiz

function startQuiz() {
    startQuizBtn.classList.add('hide')
    startTimer();
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    startNextQ();

    // start question cycle
}

function startNextQ () {
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
    })
}

function selectChoice () {

}

// array of questions
var questions = [
    { 
        question: "What are variables used for in JavaScript Programs?",
        choice1: "Storing numbers, dates, or other values",
        choice2: "Varying randomly",
        choice3: "Causing high-school algebra flashbacks",
        choice4: "None of the above",
        answer: 1
    },

    { 
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<js>",
        choice2: "<scripting>",
        choice3: "<script>",
        choice4: "<javascript>",
        answer: 3
    },

    { 
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        choice1: "Javascript",
        choice2: "Terminal/Bash",
        choice3: "For Loops",
        choice4: "Console.log",
        answer: 4
    },

    { 
        question: "The condition in an if/else statement is enclosed within",
        choice1: "Quotes",
        choice2: "Curly Brackets",
        choice3: "Parenthesis",
        choice4: "Square Brackets",
        answer: 2
    },

    { 
        question: "Commonly used data types DO NOT include:",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        answer: 4
    },
]

// function to score user for correct answers

var score = 0;
for (var i = 0; i < questions.length; i++) {

}

// function to call questions
// function to introduce next question


// function to penalize timer by -10 seconds for incorrect answers

