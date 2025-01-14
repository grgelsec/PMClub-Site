export const LandingPage = () => {
  return (
    <>
      <header className="absolute w-full py-2 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-start mb-4 sm:mb-0">
            <div className="w-1/2 sm:w-auto">
              <img
                className="w-24 sm:w-28 lg:w-32 transition-transform duration-300 hover:scale-105"
                src="src/assets/pmcLogo.png"
                alt="PMC Logo"
              />
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <div className="flex flex-row justify-center sm:justify-end space-x-4 md:space-x-6">
              <button className="flex bg-lavender px-4 sm:px-6 md:px-8 lg:px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 items-center">
                <span className="font-bold text-white text-sm md:text-base">
                  Join
                </span>
              </button>
              <button className="flex bg-orange-300 px-4 sm:px-6 md:px-8 lg:px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <span className="font-bold text-white text-sm md:text-base">
                  Contact
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen items-center justify-center flex-col p-4 sm:p-8 md:p-16 lg:p-24 mt-14 sm:mt-16 md:mt-20">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
