export const EventsPage = () => {
  return (
    <div id="events" className="h-3/4 w-full p-4 sm:p-6 md:p-8 lg:p-24">
      <div className="w-full p-2 bg-gradient-to-br white rounded-xl ">
        <div className="flex w-full justify-center ">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-[#c7a1fc] text-white rounded-xl w-full md:w-1/2 lg:w-1/3 p-2 shadow-xl">
            EVENTS
          </h1>
        </div>

        <main className="flex flex-col gap-6 w-full p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl">
          <h2 className=" w-full flex justify-start p-2">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#D5B8FF] hover:scale-105 duration-300">
              UPCOMING
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fot-bold">
            {[
              {
                eventTitle: "Resume/Recruiting | Product Design Activity",
                description:
                  "Join us for a resume/recruiting info session along with a product design activtiy!",
                location: "Shoemaker Innovation Center, Luddy 2nd Floor",
                time: "Feb 4th, 2025 | 7PM",
              },
              {
                eventTitle: "MVP workshop with shoemaker scholars!",
                description:
                  "Come along for a special workshop with IU shoemaker scholars!",
                location: "Shoemaker Innovation Center, Luddy 2nd Floor",
                time: "Feb 11th, 2025 | 7PM",
              },
              {
                eventTitle: "Big Tech Guest Speaker",
                description:
                  "Come sit in with us on a special talk from a guest speaker with big tech experience!",
                location: "Shoemaker Innovation Center, Luddy 2nd Floor",
                time: "Feb 18th, 2025 | 7PM",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] rounded-xl p-2 h-80 transition-transform hover:scale-105 duration-300"
              >
                <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl  text-black ">
                    {event.eventTitle}
                  </h3>
                  <p className="flex-grow mt-4 text-sm sm:text-base text-black overflow-auto">
                    {event.description}
                  </p>
                  <footer className="flex justify-between items-center mt-4 px-2 space-x-4">
                    <p className="text-sm sm:text-base text-black">
                      {event.location}
                    </p>
                    <p className="text-sm sm:text-base text-black">
                      {event.time}
                    </p>
                  </footer>
                </div>
              </div>
            ))}
          </div>

          <h2 className=" w-full flex justify-start p-2 mt-8">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#D5B8FF] hover:scale-105 duration-300">
              PAST
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                eventTitle: "Product Roadmapping",
                description:
                  "Learn about how to outline the vision, direction, and progress of a product!",
                location: "Shoemaker Innovation Center, Luddy 2nd Floor",
                time: "Nov 12th, 2024 | 7PM",
              },
              {
                eventTitle: "SDL and Tech Basics",
                description:
                  "Informative session on tech basics needed for PMs to thrive when working with engineers. Learn from our Director of Technology with a special keynote aimed towards key concepts and terms!",
                location: "Shoemaker Innovation Center, Luddy 2nd Floor",
                time: "Oct 29th, 2024 | 7PM",
              },
              {
                eventTitle: "Navigating the Product World",
                description:
                  "Join us for a keynote on how to create/find PM opportunities and how to succeed in the product world!",
                location: "Shoemaker Innovation Center, Luddy 2nd Floor",
                time: "Sept 1st, 2024 | 7PM",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] rounded-xl p-2 h-80 transition-transform hover:scale-105 duration-300"
              >
                <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl text-black">
                    {event.eventTitle}
                  </h3>
                  <p className="flex-grow mt-4 text-sm sm:text-base text-black overflow-auto">
                    {event.description}
                  </p>
                  <footer className="flex justify-between items-center mt-4 px-2 space-x-4">
                    <p className="text-sm sm:text-base text-black">
                      {event.location}
                    </p>
                    <p className="text-sm sm:text-base text-black">
                      {event.time}
                    </p>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EventsPage;
