import React, { useEffect, useState } from "react";
import Header from "../../shared/header";
import { getFromLocalStorage } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../router/const";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuestions = getFromLocalStorage("questions");
    if (storedQuestions) {
      setQuestions(storedQuestions);
    } else {
      navigate(HOME_ROUTE);
    }
  }, [navigate]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    } else {
      setShowCorrectAnswer(true);
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 2000); //
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowCorrectAnswer(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="bg-[#7d8fa2] h-screen flex flex-col items-center justify-center gap-10">
        <Header />
        <h1 className="text-white text-4xl font-bold">Quiz Completed!</h1>
        <p className="text-white text-2xl">
          Your score: {score} / {questions.length}
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#6C5CE7] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#5A4DCF] transition duration-300"
        >
          Play Again
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="bg-[#7d8fa2] h-screen flex flex-col items-center justify-center">
        Loading...
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="bg-[#7d8fa2] h-screen flex flex-col items-center justify-center gap-10">
      <Header />
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-[#2D3436]">
          {currentQuestion.question}
        </h2>
      </div>

       <div className="flex flex-col gap-4 w-full max-w-md">
        {answers.map((answer, index) => {
          const isCorrect = answer === currentQuestion.correct_answer;
          const isSelected = selectedAnswer === answer;
          const isWrong = isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`w-full p-3 rounded-lg text-white font-semibold transition duration-300 ${
                isSelected
                  ? isCorrect
                    ? "bg-[#00B894]"
                    : "bg-[#FF6B6B]" 
                  : showCorrectAnswer && isCorrect
                  ? "bg-[#00B894]" 
                  : "bg-[#6C5CE7] hover:bg-[#5A4DCF]" 
              }`}
            >
              {answer}
            </button>
          );
        })}
      </div>

    </div>
  );
}

export default Questions;
