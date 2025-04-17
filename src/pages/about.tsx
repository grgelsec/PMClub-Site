import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="min-h-screen w-full p-4 md:p-8 lg:p-24" id="about">
      <div className="flex w-full justify-center ">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-[#c7a1fc] text-white rounded-xl w-full md:w-1/2 lg:w-1/3 mb-14 p-2 shadow-xl">
          INFO
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-full">
        <div className="h-full">
          <div
            id="hook"
            className="rounded-xl shadow-xl p-4 md:p-6 bg-white/80 ring-4 ring-[#D5B8FF] h-full"
          >
            <div className="flex text-[#c7a1fc] text-2xl md:text-3xl font-bold justify-center mb-4">
              <h1 className="hover:scale-105 transition-transform duration-300">
                ABOUT PMC
              </h1>
            </div>

            <div className="h-1/4 w-full text-white text-sm md:text-xl py-6 px-2 md:p-6 lg:px-6 lg:py-2 rounded-xl bg-[#c7a1fc] hover:shadow-md transition-all duration-300 flex items-center lg:text-xl sm:text-xl">
              At Product Management Club, we bridge the gap between innovation
              and execution. Our community brings together aspiring product
              managers, designers, and tech enthusiasts to learn, collaborate,
              and grow together in the dynamic field of product management. Our
              community brings together aspiring product managers, designers,
              and tech enthusiasts to learn, collaborate, and grow together in
              the dynamic field of product management.
            </div>

            <div className="lg:h-1/3 sm:h-2/6 my-10 flex justify-center items-center">
              <img
                className="h-full w-auto rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 object-contain"
                src={`/assets/PM Club (1).png`}
                alt="Product Management Club"
              />
            </div>

            <div className="h-1/4 w-full text-white text-sm md:text-xl p-2 md:p-6 lg:px-6 lg:py-2 rounded-xl bg-[#c7a1fc] hover:shadow-md transition-all duration-300 flex items-center lg:text-xl sm:text-xl">
              We offer hands-on workshops, networking events, and real-world
              project experiences that prepare our members for successful
              careers in product management. Join us to develop your skills,
              build your network, and shape the future of technology. Our
              community brings together aspiring product managers, designers,
              and tech enthusiasts to learn, collaborate, and grow together in
              the dynamic field of product management.
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4 h-full">
          <div className="rounded-xl shadow-2xl bg-white/80 p-4 md:p-6 ring-4 ring-orange-300 h-full">
            <div className="text-orange-300 text-xl md:text-3xl font-bold text-center mb-4">
              <h1 className="hover:scale-105 transition-transform duration-300">
                UPCOMING EVENTS
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 h-[calc(100%-4rem)]">
              <div className="w-full lg:w-1/2 rounded-xl p-4 bg-orange-300 flex flex-col">
                <div className="text-white font-bold text-lg mb-2 lg:text-xl">
                  Resume/Recruiting | Product Design Activity
                </div>

                <p className="text-white text-sm md:text-base flex-grow lg:text-xl">
                  Join us for a resume/recruiting info session along with a
                  product design activity!
                </p>

                <div className="flex justify-between items-center text-sm text-white mt-2 lg:text-md">
                  <span>Shoemaker Innovaion Center</span>
                  <span className="font-medium">Feb 4th, 2025</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between gap-2 lg:border-l border-[#FFD6A5]/30 lg:pl-4">
                {[
                  {
                    title: "MVP workshop with shoemaker scholars",
                    date: "Feb 11th, 7PM",
                  },
                  { title: "Big Tech Guest Speaker", date: "Feb 18th, 7PM" },
                  { title: "PMC Meeting", date: "Feb 25th, 7PM" },
                  { title: "PMC Meeting", date: "March 4th, 7PM" },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="p-4 lg:p-6  rounded-xl bg-orange-300 cursor-pointer hover:shadow-xl hover:-translate-y-0.5 duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white text-sm md:text-base">
                        {event.title}
                      </span>
                      <span className="text-sm text-white lg:text-lg">
                        {event.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-2xl bg-white/80 p-4 ring-4 ring-green-300 flex flex-col justify-between h-full">
            <div className="text-[#36ffae] text-2xl md:text-3xl font-bold text-center">
              <h1>JOIN SLACK</h1>
            </div>
            <div className="flex justify-center flex-grow items-center">
              <Link
                to={`https://join.slack.com/t/productmanage-tps7335/shared_invite/zt-2ybtg0oqc-OrB3KqjS11tgdRwSuaxJNg`}
                className="w-32 md:w-40 p-4 lg:p-8 rounded-xl bg-[#36ffae] flex justify-center hover:shadow-xl hover:-translate-y-0.5 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
