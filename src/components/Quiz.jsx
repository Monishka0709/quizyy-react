import React from 'react'
import '../Quiz.css'

const Quiz = () => {


  const questions = [
    {
        question: "________ language does not follow OOPS concept.",
        answers:[
            {text: "C++", correct: false},
            {text: "C", correct: true},
            {text: "Java", correct: false},
            {text: "Python", correct: false}
        ]
    },
    {
        question: "________ is called instance of a class.",
        answers:[
            {text: "Object", correct: true},
            {text: "Constructor", correct: false},
            {text: "Destructor", correct: false},
            {text: "Method", correct: false}
        ]
    },
    {
        question: "Which keyword is used to inherit a class in java?",
        answers:[
            {text: "inherits", correct: false},
            {text: "new", correct: false},
            {text: "extends", correct: true},
            {text: "interface", correct: false}
        ]
    },
    {
        question: "Which of the following is not an OOP concept?",
        answers:[
            {text: "Encapsulation", correct: false},
            {text: "Exception", correct: true},
            {text: "Polymorphism", correct: false},
            {text: "Abstraction", correct: false}
        ]
    },
    {
        question: "Which feature of OOP describes the reusability of code?",
        answers:[
            {text: "Abstraction", correct: false},
            {text: "Encapsulation", correct: false},
            {text: "Polymorphism", correct: false},
            {text: "Inheritance", correct: true}
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
        
    });
    nextButton.style.display = "block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
 

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});
startQuiz();




  return (
    <div>
      <div className="app">
        <h1>Simple Quiz</h1>
        <div className="quiz">
            <h2 id="question">Question goes here</h2>
            <div id="answer-buttons">
                <button className="btn">Answer1</button>
                <button className="btn">Answer2</button>
                <button className="btn">Answer3</button>
                <button className="btn">Answer4</button> 
            </div>
            <button id="next-btn">Next</button>
        </div>
    </div>
    </div>
  )
}

export default Quiz
