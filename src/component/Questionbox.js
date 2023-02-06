import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../component/Questionbox.css"
import { getAuth, signOut } from "firebase/auth";
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    options: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    options: [
      { text: "Harper Lee", correct: true },
      { text: "Ernest Hemingway", correct: false },
      { text: "William Faulkner", correct: false },
      { text: "F. Scott Fitzgerald", correct: false },
    ],
  },
  {
    question: "What is the main color of the American flag?",
    options: [
      { text: "Red", correct: false },
      { text: "White", correct: true },
      { text: "Blue", correct: false },
      { text: "Green", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      { text: "Michelangelo", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Raphael", correct: false },
      { text: "Botticelli", correct: false },
    ],
  },
  {
    question: "What is the name of the longest river in the world?",
    options: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Who was the first president of the United States?",
    options: [
      { text: "Thomas Jefferson", correct: false },
      { text: "George Washington", correct: true },
      { text: "Abraham Lincoln", correct: false },
      { text: "Franklin D. Roosevelt", correct: false },
    ],
  },
  {
    question: "What is the most populous city in the world?",
    options: [
      { text: "Tokyo", correct: true },
      { text: "New York", correct: false },
      { text: "Istanbul", correct: false },
      { text: "Mumbai", correct: false },
    ],
  },]


const Questionbox = () => {

  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    if (option.correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === quizQuestions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  if (showResults) {
    return (
      <>
        <div className="container">
          <div className="popup">
            <h2>Quiz Result!</h2>
            <h5>Total Question: {quizQuestions.length}</h5>
            <h5>Correct Answer: {score}</h5>
            <div>
              <button onClick={() => {
                setCurrentQuestionIndex(0);
                setScore(0);
                setShowResults(false);

              }} className="popupbtn">Attempt Again</button>

              <Link to={'/quiz'}>
                <button onClick={() => {

                  const auth = getAuth();
                  signOut(auth).then(() => {
                    console.log('logout')
                  }).then(() => {
                    localStorage.clear()
                    navigate('/')
                  }).catch((error) => {
                    console.log(error)
                  });

                }} className="popupbtn">Logout</button>
              </Link></div>
          </div>
        </div>

      </>
    );

  }
  return (
    <>
      <section>
        <div class='air air1'></div>
        <div class='air air2'></div>
        <div class='air air3'></div>
        <div class='air air4'></div>
        <div className="container">
          <div className="child-container">
            <div className="child-h2"> <h2>{currentQuestion.question}</h2> <p>Question {currentQuestionIndex + 1} of {quizQuestions.length}</p></div>
            <ul>
              {currentQuestion.options.map((option) => (
                <li key={option.text} onClick={() => handleOptionClick(option)}>
                  {option.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
   </>
  )
}
export default Questionbox;
