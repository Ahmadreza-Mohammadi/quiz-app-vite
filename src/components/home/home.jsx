import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#9334ea] h-screen flex flex-col items-center justify-around">
      <div className=" flex flex-col items-center gap-24">
        <h1 className="font-bold text-5xl">QUIZ</h1>
        <span className="font-semibold text-white text-xl">
          Welcome To Quiz App
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <span onClick={()=>{navigate("difficulty")}} className="font-semibold text-white text-xl">GET STARTED</span>
        <img
          className="h-12"
          src="https://www.svgrepo.com/show/499714/rocket.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeComponent;
