import { useState } from "react";
import Header from "../../shared/header";
import axios from "axios";
import { setInLocalStorage } from "../../utils/utils";

const categories = [
  { name: "sport", id: 21 },
  { name: "art", id: 25 },
  { name: "history", id: 23 },
  { name: "books", id: 10 },
  { name: "music", id: 12 },
  { name: "animals", id: 27 },
];

function Setup() {
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
        console.log(res.data.results);
        setInLocalStorage("questions", res.data.results)
      } catch (err) {
        console.log(err);
      }
      setErrorMessage("");
    } else {
      setErrorMessage("Number of questions cannot be greater than 100");
    }
  }

  return (
    <div className="bg-[#9334ea] h-screen flex flex-col items-center justify-around">
      <div className="flex flex-col items-center gap-24">
        <Header />
        <h1 className="font-bold text-white text-2xl">Setup Quiz</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-white font-semibold">Number Of Question</span>
          <input
            onChange={(e) => setNumOfQuestions(e.target.value)}
            className="bg-[#fde047] w-[580px] p-2 rounded-md shadow-xl"
            type="number"
          />
        </div>

        <div className="flex flex-col gap-1">
          <select
            onChange={(e) => setUserCategory(e.target.value)}
            className="bg-[#fde047] w-[580px] p-2 rounded-md shadow-xl"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <select
            className="bg-[#fde047] w-[580px] p-2 rounded-md shadow-xl"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="meidum">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      {errorMessage && (
        <div className="text-red-500">
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h1
          className="font-bold text-white text-3xl hover:cursor-pointer"
          onClick={() => quizDataHandler(userCategory, difficulty, numOfQuestions)}
        >
          START
        </h1>
        <img
          onClick={() =>
            quizDataHandler(userCategory, difficulty, numOfQuestions)
          }
          className="h-10 hover:cursor-pointer"
          src="https://www.svgrepo.com/show/375866/power.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Setup;
