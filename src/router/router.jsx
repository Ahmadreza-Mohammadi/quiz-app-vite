import React from "react";
import { Route, Routes } from "react-router-dom";
import { HOME_ROUTE, QUESTIONS_ROUTE, SETUP_ROUTE } from "./const";
import HomePage from "../pages/home/home";
import SetupPage from "../pages/setup/setup";
import QuestionsPage from "../pages/questions/questions";

function Router() {
  return (
    <>
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />} />
        <Route path={SETUP_ROUTE} element={<SetupPage />} />
        <Route path={QUESTIONS_ROUTE} element={<QuestionsPage />} />
      </Routes>
    </>
  );
}

export default Router;
