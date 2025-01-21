export const InterestPage = () => {
  return (
    <div id="board" className="min-h-screen w-full p-24">
      <div className="flex w-full justify-center hover:scale-105 duration-300">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] rounded-xl w-full md:w-1/2 lg:w-1/3 bg-white mb-14 p-2 shadow-xl">
          EXECUTIVES
        </h1>
      </div>
      <div className="w-full min-h-screen p-2 sm:p-4 bg-gradient-to-br from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] rounded-xl">
        <main className="h-full w-full p-4 sm:p-6 md:p-8 lg:p-24 bg-white rounded-xl">
          <div className="flex flex-col items-center max-w-7xl mx-auto">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent animate-gradient transition-transform hover:scale-105 duration-300 shadow-xl p-4 rounded-xl">
              BOARD
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
              {[
                { role: "Co-President", name: "Shreyas Menon" },
                { role: "Co-President", name: "Makaael Kazmi" },
                { role: "Vice President", name: "Tanya Kalale" },
                { role: "Director of Marketing", name: "Roxanne Sabel" },
                { role: "Director of Finance", name: "Reid Zona" },
                { role: "Director of External Outreach", name: "Isabelle U." },
                { role: "Director of Technology", name: "George Lisec" },
              ].map((position, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] p-[2px] rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl h-full flex flex-col justify-center items-center">
                    <div className="font-bold text-lg md:text-xl text-center text-black">
                      {position.name}
                    </div>
                    <div className="text-gray-600 mt-2 text-center">
                      {position.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent animate-gradient transition-transform hover:scale-105 duration-300 mt-12 shadow-xl p-4 rounded-xl">
              COMMITTEE
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
              {[
                { name: "Ale Gotanco" },
                { name: "Ria Kudapa" },
                { name: "Angelina Lukose" },
                { name: "Jason Tang" },
              ].map((position, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#FFD6A5] via-[#98FFD6] to-[#D5B8FF] p-[2px] rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl h-full flex flex-col justify-center items-center">
                    <div className="font-bold text-lg md:text-xl text-center text-black">
                      {position.name}
                    </div>
                    <div className="text-gray-600 mt-2 text-center">
                      Committee Member
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InterestPage;
