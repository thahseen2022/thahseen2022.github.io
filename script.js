// script.js

const quizQuestion = document.querySelector('.quiz-question p');
const quizOptions = document.querySelector('.quiz-options');
const startButton = document.getElementById('start-btn');
let inFullscreen = false;

function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

// Event listener for the start button
startButton.addEventListener('click', () => {
    if (!inFullscreen) {
        enterFullscreen();
        inFullscreen = true;
    }
    startQuiz();
});

// Example quiz question and logic
const question = {
    questionText: 'Is the Earth round?',
    correctAnswer: true
};

function startQuiz() {
    startButton.style.display = 'none'; // Hide the start button
    displayQuestion();
}

function displayQuestion() {
    // Set the question text
    quizQuestion.textContent = question.questionText;

    // Create "True" and "False" buttons
    const trueButton = document.createElement('button');
    trueButton.textContent = 'True';
    const falseButton = document.createElement('button');
    falseButton.textContent = 'False';

    // Add event listeners for the "True" and "False" buttons
    trueButton.addEventListener('click', () => {
        checkAnswer(true);
    });

    falseButton.addEventListener('click', () => {
        checkAnswer(false);
    });

    // Clear previous options and append the buttons to the quiz options container
    quizOptions.innerHTML = '';
    quizOptions.appendChild(trueButton);
    quizOptions.appendChild(falseButton);
}

function checkAnswer(userAnswer) {
    const resultContainer = document.querySelector('.quiz-question');
    if (userAnswer === question.correctAnswer) {
        resultContainer.textContent = 'Correct! The Earth is round.';
    } else {
        resultContainer.textContent = 'Incorrect! The Earth is round.';
    }
}
