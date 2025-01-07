export const LandingPage = () => {
  return (
    <>
      <header className="absolute w-full py-2   ">
        <div className="flex flex-row w-full">
          <div className="w-1/2 ">
            <div className="flex flex-row w-1/2 ml-4">
              <img
                className="w-1/4 transition-transform duration-300 hover:scale-105"
                src="src/assets/IU.png"
              ></img>
              <h1 className="text-black font-bold flex items-center text-xl transition-transform duration-300 hover:scale-105">
                INDIANA UNIVERSITY
              </h1>
            </div>
          </div>
          <div className="flex w-1/2  justify-end">
            <div className="flex flex-row w-1/2 ml-4  items-center mr-4 justify-center space-x-6">
              <button className="flex bg-[#D5B8FF] px-8 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <text className="font-bold">Join</text>
              </button>
              <button className="flex bg-[#FFD6A5] px-8 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <text className="font-bold">Contact</text>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen items-center justify-center py-8 ">
        <div className="container mx-auto shadow-xl rounded-xl py-16 bg-white/80 backdrop-blur-sm">
          <div className="flex justify-center items-center ">
            <img
              src="src/assets/pmcLogo.png"
              className="w-1/4 transition-transform duration-300 hover:scale-105"
            />
            <div className="space-y-4 bg-[#ffffffe0] shadow-xl p-4 rounded-xl transition-transform hover:scale-105 duration-300">
              <h1 className="font-bold text-5xl bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent animate-gradient relative transition-transform hover:scale-103 duration-300">
                PRODUCT MANAGEMENT CLUB
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
