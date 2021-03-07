var timeArea = document.querySelector(".timer-area");
var textArea = document.querySelector(".text-area");
var questionNumber = 0;
var correctAnswers = 0;

//Define buttons
var startButton = document.querySelector("#start-button");
var responseButtonA = document.querySelector("#response0");
var responseButtonB = document.querySelector("#response1");
var responseButtonC = document.querySelector("#response2");
var responseButtonD = document.querySelector("#response3");

//Set amount of time in quiz
var quizTime = 10;

var questionArray = [
    {
        question: "Commonly used Data Types DO NOT include:",
        A: "String",
        B: "Symbol",
        C: "Boolean",
        D: "Number",
        answer: "B"
    },
    {
        question: "The condition in an if/else statement is enclosed within:",
        A: "()",
        B: "[]",
        C: "{}",
        D: "''",
        answer: "A"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        A: "Answer 1",
        B: "Answer 2",
        C: "Answer 3",
        D: "Answer 4",
        answer: "C"
    },
    {
        question: "String values must be enclused within:",
        A: "Answer 1",
        B: "Answer 2",
        C: "Answer 3",
        D: "Answer 4",
        answer: "D"
    },
    {
        question: "A tool used during predevelopment and debugging for printing content the the debugger is:",
        A: "Answer 1",
        B: "Answer 2",
        C: "Answer 3",
        D: "Answer 4",
        answer: "C"
    }
];

//Load initial text
textArea.innerHTML = `There are 5 questions in this quiz. <br/>
You will have ${quizTime} seconds to complete the quiz. <br/>
Every wrong answer will subtract 10 seconds from your remaining time.<br/>
Click the "Start" button when you are ready to begin.`;

startButton.addEventListener("click", function (event) {
    event.stopPropagation();
    startTimer();
    showQuestion();
    startButton.setAttribute("style", "display: none");
});

function startTimer() {
    var timerInterval = setInterval(function () {
        quizTime--;
        timeArea.textContent = `${quizTime} seconds left!`;

        if (quizTime === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {

    if(questionNumber >= questionArray.length) {
        responseButtonA.setAttribute("style", "display: none");
        responseButtonB.setAttribute("style", "display: none");
        responseButtonC.setAttribute("style", "display: none");
        responseButtonD.setAttribute("style", "display: none");
        textArea.innerHTML = `Quiz complete. You got ${correctAnswers} out of ${questionArray.length} questions correct!`;
        startButton.setAttribute("style", "display: inline");
        startButton.textContent = "Play Again";
        questionNumber = 0;
        correctAnswers = 0;
        return;
    }

    var question = questionArray[questionNumber].question;
    var ansA = questionArray[questionNumber].A;
    var ansB = questionArray[questionNumber].B;
    var ansC = questionArray[questionNumber].C;
    var ansD = questionArray[questionNumber].D;

    textArea.innerHTML = question;
    
    responseButtonA.setAttribute("style", "display: block");
    responseButtonA.textContent = ansA;
    responseButtonA.addEventListener("click", function() {
        checkAnswer("A")
    });

    responseButtonB.setAttribute("style", "display: block");
    responseButtonB.textContent = ansB;
    responseButtonB.addEventListener("click", function() {
        checkAnswer("B")
    });

    responseButtonC.setAttribute("style", "display: block");
    responseButtonC.textContent = ansC;
    responseButtonC.addEventListener("click", function() {
        checkAnswer("C")
    });

    responseButtonD.setAttribute("style", "display: block");
    responseButtonD.textContent = ansD;
    responseButtonD.addEventListener("click", function() {
        checkAnswer("D")
    });
}

function checkAnswer(response) {
    console.log(response);
    if (response === questionArray[questionNumber].answer) {
        correctAnswers++;
        console.log("correct");
    } else {
        console.log("incorrect");
    }
    questionNumber++;
    showQuestion();
}

function endQuiz() {
    responseButtonA.setAttribute("style", "display: none");
    responseButtonB.setAttribute("style", "display: none");
    responseButtonC.setAttribute("style", "display: none");
    responseButtonD.setAttribute("style", "display: none");
    textArea.innerHTML = `Time is up! You got ${correctAnswers} out of ${questionArray.length} questions correct!`;
    startButton.setAttribute("style", "display: inline");
    startButton.textContent = "Play Again";
    timeArea.setAttribute("style", "display:none");
    questionNumber = 0;
    correctAnswers = 0;
}