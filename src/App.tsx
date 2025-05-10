import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

function App() {
  const searchSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToSearch = () => {
    console.log("Image clicked");
    console.log(searchSectionRef.current);
    searchSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/*setup logo and nav bar */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-950 p-4">
        <h1 className="tracking-tight text-gray-950 dark:text-white mt-2 text-3xl font-medium ">
          Tutton-Hughes Auto Sales
        </h1>
        <button className="bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-4 py-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-4-4l4 4m0 0l-4 4m4-4H7"
            />
          </svg>
        </button>
      </div>
      <div className="bg-white dark:bg-gray-950">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-gray-950 dark:text-white mb-4">
            Welcome to Tutton-Hughes Auto Sales
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Your one-stop shop for all your car needs.
          </p>
          <img
            src="tutton-hughes-shop-image.jfif"
            alt="Tutton-Hughes Auto Sales"
            className="w-1/2 h-auto rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We have a wide variety of cars to choose from and our team is here
            to help you find the perfect car for your needs.
          </p>
          <ArrowDownIcon
            className="h-6 w-6 text-gray-950 dark:text-white animate-bounce mb-4 cursor-pointer"
            onClick={handleScrollToSearch}
          />
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Scroll down to search for a car.
          </p>
        </div>
        <div
          ref={searchSectionRef}
          className="flex flex-col items-center justify-center h-screen"
        >
          <h1 className="text-4xl font-bold text-gray-950 dark:text-white mb-4">
            Search for a car
          </h1>
          <input
            type="text"
            placeholder="Search for a car..."
            className="border border-gray-300 rounded-md p-2 mb-4 w-1/2"
          />
          <button className="bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
