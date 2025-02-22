import React from "react";
import Header from "../../shared/header";

function Questions() {
  
  return (
    <div className="bg-[#9334ea] h-screen flex flex-col items-center gap-20 pt-10">
      <Header />
      <div className="w-[590px] h-[260px] rounded-2xl shadow-2xl bg-white">323</div>
      <div>
        <div className="flex flex-col gap-2">
          <p className="bg-blue-400 w-[410px]">1</p>
          <p className="bg-blue-400 w-[410px]">1</p>
          <p className="bg-blue-400 w-[410px]">1</p>
          <p className="bg-blue-400 w-[410px]">1</p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
