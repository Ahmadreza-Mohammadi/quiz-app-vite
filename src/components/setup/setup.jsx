import { useState } from "react";
import Header from "../../shared/header";
import axios from "axios";
import { setInLocalStorage } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { QUESTIONS_ROUTE } from "../../router/const";

const categories = [
  { name: "sport", id: 21 },
  { name: "art", id: 25 },
  { name: "history", id: 23 },
  { name: "books", id: 10 },
  { name: "music", id: 12 },
  { name: "animals", id: 27 },
];

function Setup() {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState(null);
  const [userCategory, setUserCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function quizDataHandler(id, difficulty, questionsCount) {
    if (questionsCount <= 100) {
      try {
        const res = await axios.get(
          `https://opentdb.com/api.php?amount=${questionsCount}&category=${id}&difficulty=${difficulty}`
        );
        setInLocalStorage("questions", res.data.results);
        navigate(`/${QUESTIONS_ROUTE}`);
      } catch (err) {
        console.log(err);
      }
      setErrorMessage("");
    } else {
      setErrorMessage("Number of questions cannot be greater than 100");
    }
  }

  return (
    <div className="bg-[#7d8fa2] h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center flex flex-col gap-6">
        <Header />
        <h1 className="font-bold text-[#2D3436] text-3xl mb-4">Setup Quiz</h1>

        <div className="flex flex-col gap-2">
          <span className="text-[#2D3436] font-semibold">
            Number Of Questions
          </span>
          <input
            onChange={(e) => setNumOfQuestions(e.target.value)}
            className="bg-[#F8F9FA] w-full p-2 rounded-lg border border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
            type="number"
            placeholder="Enter number of questions"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#2D3436] font-semibold">Category</span>
          <select
            onChange={(e) => setUserCategory(e.target.value)}
            className="bg-[#F8F9FA] w-full p-2 rounded-lg border border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[#2D3436] font-semibold">Difficulty</span>
          <select
            onChange={(e) => setDifficulty(e.target.value)}
            className="bg-[#F8F9FA] w-full p-2 rounded-lg border border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {errorMessage && (
          <div className="text-red-500 font-semibold">
            <p>{errorMessage}</p>
          </div>
        )}

        <button
          onClick={() =>
            quizDataHandler(userCategory, difficulty, numOfQuestions)
          }
          className="bg-[#6C5CE7] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#5A4DCF] hover:scale-105 transition-all duration-300"
        >
          START
        </button>
      </div>
    </div>
  );
}

export default Setup;
