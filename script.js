const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
}

function selectAnswer() {}

const questions = [
  {
    question: "Who won the NBA finals in 2019?",
    answer: [
      { text: "Raptors", correct: "true" },
      { text: "Warriors", correct: "false" },
      { text: "Lakers", correct: "false" },
      { text: "Bucks", correct: "false" },
    ],
  },
];
