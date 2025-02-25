import { useNavigate } from "react-router-dom";
import Header from "../../shared/header";

function HomeComponent() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#7d8fa2] h-screen flex flex-col items-center justify-center">
      {/* باکس کوییز */}
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center flex flex-col gap-10 hover:scale-105 transition-transform duration-300">
        <span className="font-bold text-[#2D3436] text-4xl mb-6 block">
          Welcome To Quiz App
        </span>
        <button
          onClick={() => {
            navigate("setup");
          }}
          className="bg-[#6C5CE7] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#5A4DCF] cursor-pointer hover:scale-105 transition-all duration-300"
        >
          GET STARTED
        </button>
        <img
          className="h-12 mt-6 mx-auto animate-float cursor-pointer"
          src="https://www.svgrepo.com/show/499714/rocket.svg"
          alt="Rocket"
        />
      </div>
    </div>
  );
}

export default HomeComponent;