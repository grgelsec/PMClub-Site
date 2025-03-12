import { Link } from "react-router-dom";
//Things that hover out seem clickable
//Colors are bright
//about logo should have a border
//logo in the middle of the about is awkward 
//a lot of white space around the slack button
//move events up to the top of the website 
//make the info more like an overview
//links dont look like theyre clickable
export const LandingPage = () => {
  return (
    <>
      <header id="hero" className="w-full py-2 px-4 md:px-6 lg:px-1">
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex justify-center sm:justify-start w-full sm:w-auto">
              <img
                className="w-20 sm:w-24 lg:w-28 transition-transform duration-300 hover:scale-105"
                src={`/assets/pmcLogo.png`}
                alt="PMC Logo"
              />
            </div>

            <div className="flex flex-row justify-center space-x-4 w-full sm:w-auto">
              <button
                onClick={() =>
                  document
                    .getElementById("interested")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center bg-[#c7a1fc] px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="font-bold text-white text-sm sm:text-base">
                  Join
                </span>
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center bg-[#c7a1fc] px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="font-bold text-white text-sm sm:text-base">
                  Contact
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen items-center justify-center flex-col p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="flex items-center justify-center w-full h-full min-h-[calc(100vh-4rem)] shadow-xl rounded-xl p-2 sm:p-4 bg-gradient-to-br from-[#cca7ff] via-[#6efac2] to-[#f5c386]">
          <div className="container mx-auto rounded-xl py-6 sm:py-8 md:py-10 px-4">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-[#ffffffe0] shadow-xl p-3 sm:p-4 md:p-6 rounded-xl transition-transform hover:scale-105 duration-300 w-full max-w-3xl mx-4">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent animate-gradient relative transition-transform hover:scale-103 duration-300">
                  PRODUCT MANAGEMENT CLUB
                </h1>
              </div>
              <div className="w-3/4 flex justify-center mt-4 sm:mt-6 md:mt-8 \">
                <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center transition-transform hover:scale-103 duration-300 before:animate-typewritter font-mono after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black w-full sm:w-4/5 md:w-3/4 lg:w-2/3 shadow-md rounded-xl ring-2 ring-white p-4">
                  "TECHNOLOGY IS MORE THAN CODING"
                </h2>
                <Link
                  to={`https://forms.gle/rwXoyybpenYsGCTX7`}
                  className="flex items-center justify-center absolute w-1/4 lg:w-1/6 ring-2 p-6 mt-28 sm:mt-24 rounded-xl ring-white font-bold text-2xl hover:bg-white/70 duration-300"
                >
                  JOIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
