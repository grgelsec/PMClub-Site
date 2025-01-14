export const LandingPage = () => {
  return (
    <>
      <header className="top-0 w-full py-2 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex justify-center sm:justify-start w-full sm:w-auto">
              <img
                className="w-20 sm:w-24 lg:w-28 transition-transform duration-300 hover:scale-105"
                src="src/assets/pmcLogo.png"
                alt="PMC Logo"
              />
            </div>

            <div className="flex flex-row justify-center space-x-4 w-full sm:w-auto">
              <button className="flex items-center bg-lavender px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <span className="font-bold text-white text-sm sm:text-base">
                  Join
                </span>
              </button>
              <button className="flex items-center bg-orange-300 px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <span className="font-bold text-white text-sm sm:text-base">
                  Contact
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen items-center justify-center flex-col p-4 sm:p-8 md:p-16 lg:p-24 mt- sm:mt-16 md:mt-20">
        <div className="flex items-center justify-center w-full h-full min-h-[calc(100vh-8rem)] shadow-xl rounded-xl p-2 sm:p-4 bg-gradient-to-br from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5]">
          <div className="container mx-auto rounded-xl py-6 sm:py-8 md:py-10 px-4">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-[#ffffffe0] shadow-xl p-3 sm:p-4 md:p-6 rounded-xl transition-transform hover:scale-105 duration-300 w-full max-w-3xl mx-4">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent animate-gradient relative transition-transform hover:scale-103 duration-300">
                  PRODUCT MANAGEMENT CLUB
                </h1>
              </div>
              <div className="w-full flex justify-center mt-4 sm:mt-6 md:mt-8">
                <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center transition-transform hover:scale-103 duration-300 before:animate-typewritter font-mono after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black w-full sm:w-4/5 md:w-3/4 lg:w-2/3 px-4">
                  "THIS IS A SLOGAN, THIS AREA WILL BE TAKEN UP BY A CATCHY
                  SLOGAN. THIS IS WHERE THE SLOGAN GOES."
                </h2>
              </div>
              <div className="flex w-1/3 mt-28 animate-bounce justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 lg:size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
