import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import SetupPage from "./pages/setup/setup";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="setup" element={<SetupPage />} />
        </Routes>
    </>
  );
}

export default App;
