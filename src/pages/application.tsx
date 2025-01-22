import { Link } from "react-router-dom";

export const InterestPage = () => {
  return (
    <div id="board" className="min-h-screen w-full p-8 lg:p-24 mb-16">
      <div className="flex w-full justify-center hover:scale-105 duration-300">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-[#c7a1fc] text-white rounded-xl w-full md:w-1/2 lg:w-1/3 mb-14 p-2 shadow-xl">
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
                {
                  role: "Co-President",
                  name: "Shreyas Menon",
                  linkedin: `https://www.linkedin.com/in/menon-shreyas/`,
                },
                {
                  role: "Co-President",
                  name: "Mekaael Kazmi",
                  linkedin: `https://www.linkedin.com/in/mekaaelkazmi/`,
                },
                {
                  role: "Vice President",
                  name: "Tanya Kalale",
                  linkedin: `https://www.linkedin.com/in/tanya-kalale/`,
                },
                {
                  role: "Director of Marketing",
                  name: "Roxanne Sabel",
                  linkedin: `https://www.linkedin.com/in/roxannesabel/`,
                },
                {
                  role: "Director of Finance",
                  name: "Reid Zona",
                  linkedin: `https://www.linkedin.com/in/reidzona/`,
                },
                {
                  role: "Director of External Outreach",
                  name: "Isabelle U.",
                  linkedin: `https://www.linkedin.com/in/isabelleuthuppan/`,
                },
                {
                  role: "Director of Technology",
                  name: "George Lisec",
                  linkedin: `https://www.linkedin.com/in/grgelsec/`,
                },
              ].map((position, index) => (
                <Link
                  to={`${position.linkedin}`}
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
                </Link>
              ))}
            </div>

            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent animate-gradient transition-transform hover:scale-105 duration-300 mt-12 shadow-xl p-4 rounded-xl">
              COMMITTEE
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
              {[
                {
                  name: "Ale Gotanco",
                  linkedin: `https://www.linkedin.com/in/alejandrorgotanco/`,
                },
                {
                  name: "Ria Kudapa",
                  linkedin: `https://www.linkedin.com/in/ria-kudapa/`,
                },
                {
                  name: "Angelina Lukose",
                  linkedin: `https://www.linkedin.com/in/angelina-lukose/`,
                },
                {
                  name: "Jason Tang",
                  linkedin: `https://www.linkedin.com/in/jasontangg/`,
                },
              ].map((position, index) => (
                <Link
                  to={`${position.linkedin}`}
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
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InterestPage;
