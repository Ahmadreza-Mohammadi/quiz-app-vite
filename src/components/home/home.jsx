import { useNavigate } from "react-router-dom";
import Header from "../../shared/header";

function HomeComponent() {
   const navigate = useNavigate();
  return (
    <div className="bg-[#9334ea] h-screen flex flex-col items-center justify-around">
      <div className=" flex flex-col items-center gap-24">
        <Header />
        <span className="font-semibold text-white text-xl">
          Welcome To Quiz App
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <span
          onClick={() => {
            navigate("setup");
          }}
          className="font-semibold text-white text-xl hover:cursor-pointer"
        >
          GET STARTED
        </span>
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
