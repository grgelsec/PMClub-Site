export const LandingPage = () => {
  return (
    <>
      <header className="absolute w-full py-2">
        <div className="flex flex-row w-full">
          <div className="w-1/2 ">
            <div className="flex flex-row w-1/2 ml-4">
              <img
                className="w-1/6 transition-transform duration-300 hover:scale-105"
                src="src/assets/pmcLogo.png"
              ></img>
            </div>
          </div>
          <div className="flex w-1/2  justify-end">
            <div className="flex flex-row w-1/2 ml-4  items-center mr-4 justify-center space-x-6">
              <button className="flex bg-lavender  px-8 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <text className="font-bold text-white">Join</text>
              </button>
              <button className="flex bg-orange-300 px-8 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <text className="font-bold text-white">Contact</text>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen items-center justify-center flex-col">
        <div className="container mx-auto shadow-xl rounded-xl p-2 bg-gradient-to-br from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5]">
          <div className="container mx-auto shadow-xl rounded-xl py-10 bg-white">
            <div className="flex justify-center items-center flex-wrap">
              <div className="bg-[#ffffffe0] shadow-xl p-4 rounded-xl transition-transform hover:scale-105 duration-300">
                <h1 className="font-bold text-5xl bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent animate-gradient relative transition-transform hover:scale-103 duration-300">
                  PRODUCT MANAGEMENT CLUB
                </h1>
              </div>
              <div className="w-full flex justify-center">
                <h1 className="font-bold text-xl text-black transition-transform hover:scale-103 duration-300 mt-8 before:animate-typewritter font-mono after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
                  "THIS IS A SLOGAN, THIS AREA WILL BE TAKEN UP BY A CATCHY
                  SLOGAN. THIS IS WHERE THE SLOGAN GOES."
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
