export const AboutPage = () => {
  return (
    <div className="min-h-screen w-full p-4 md:p-8 lg:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-full">
        <div className="h-full">
          <div className="rounded-xl shadow-xl p-4 md:p-6 bg-white/80 ring-4 ring-[#D5B8FF] h-full">
            <div className="flex text-[#D5B8FF] text-2xl md:text-3xl font-bold justify-center mb-6">
              <h1 className="hover:scale-105 transition-transform duration-300">
                ABOUT PMC
              </h1>
            </div>

            <div className="w-full text-white text-base md:text-lg p-4 md:p-6 rounded-xl bg-[#D5B8FF] hover:shadow-md transition-all duration-300">
              At Product Management Club, we bridge the gap between innovation
              and execution. Our community brings together aspiring product
              managers, designers, and tech enthusiasts to learn, collaborate,
              and grow together in the dynamic field of product management.
            </div>

            <div className="my-6 flex justify-center">
              <img
                className="w-full md:w-2/3 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                src="src/assets/PM Club (1).png"
                alt="Product Management Club"
              />
            </div>

            <div className="w-full text-white text-base md:text-lg p-4 md:p-6 rounded-xl bg-[#D5B8FF] hover:shadow-md transition-all duration-300">
              We offer hands-on workshops, networking events, and real-world
              project experiences that prepare our members for successful
              careers in product management. Join us to develop your skills,
              build your network, and shape the future of technology.
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4 h-full">
          <div className="rounded-xl shadow-2xl bg-white/80 p-4 md:p-6 ring-4 ring-orange-300">
            <div className="text-orange-300 text-xl md:text-3xl font-bold text-center mb-4">
              <h1 className="hover:scale-105 transition-transform duration-300">
                UPCOMING EVENTS
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 h-[calc(100%-4rem)]">
              <div className="w-full lg:w-1/2 rounded-xl p-4 bg-orange-300 flex flex-col">
                <div className="text-white font-bold text-lg mb-2">
                  Product Strategy Workshop
                </div>

                <p className="text-white text-sm md:text-base flex-grow">
                  Join us for an interactive session on product strategy
                  fundamentals. Learn from industry experts and network with
                  fellow product enthusiasts.
                </p>

                <div className="flex justify-between items-center text-sm text-white mt-2">
                  <span>Hodge Hall 100</span>
                  <span className="font-medium">March 15, 2024</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between lg:border-l border-[#FFD6A5]/30 lg:pl-4">
                {[
                  { title: "PM Interview Prep", date: "March 22" },
                  { title: "Tech PM Panel", date: "March 29" },
                  { title: "Design Thinking Workshop", date: "April 5" },
                  { title: "Networking Night", date: "April 12" },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-orange-300 cursor-pointer hover:shadow-xl hover:-translate-y-0.5 duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white text-sm md:text-base">
                        {event.title}
                      </span>
                      <span className="text-sm text-white">{event.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-2xl bg-white/80 p-4 ring-4 ring-green-300 flex flex-col justify-between">
            <div className="text-[#98FFD6] text-2xl md:text-3xl font-bold text-center">
              <h1>JOIN</h1>
            </div>
            <div className="flex justify-center flex-grow items-center">
              <button className="w-32 md:w-40 p-4 rounded-xl bg-green-300 flex justify-center hover:shadow-xl hover:-translate-y-0.5 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:w-8 md:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
