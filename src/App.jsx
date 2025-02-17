import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import DifficultyPage from "./pages/difficulty/difficulty";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="difficulty" element={<DifficultyPage />} />
      </Routes>
    </>
  );
}

export default App;
