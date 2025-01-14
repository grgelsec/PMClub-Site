export const EventsPage = () => {
  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-24">
      <div className="w-full min-h-screen p-2 bg-gradient-to-br white rounded-xl ">
        <div className="flex w-full justify-center hover:scale-105 duration-300">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] rounded-xl w-full md:w-1/2 lg:w-1/3 bg-white mb-2 p-2">
            EVENTS
          </h1>
        </div>

        <main className="flex flex-col gap-6 w-full p-4 sm:p-6 md:p-8 lg:p-12  rounded-xl mt-2">
          <h2 className=" w-full flex justify-start p-2">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent hover:scale-105 duration-300">
              UPCOMING
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fot-bold">
            {[
              {
                eventTitle: "Test Event Name",
                description:
                  "Join us for an interactive session on product strategy fundamentals. Learn from industry experts and network with fellow product enthusiasts.",
                location: "test location",
                time: "test time",
              },
              {
                eventTitle: "Test Event Name",
                description: "This is a test description for the test event",
                location: "test location",
                time: "test time",
              },
              {
                eventTitle: "Test Event Name",
                description: "This is a test description for the test event",
                location: "test location",
                time: "test time",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] rounded-xl p-2 h-80 transition-transform hover:scale-105 duration-300"
              >
                <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent hover:scale-105 duration-300">
                    {event.eventTitle}
                  </h3>
                  <p className="flex-grow mt-4 text-sm sm:text-base text-[#c7a1fc] overflow-auto">
                    {event.description}
                  </p>
                  <footer className="flex justify-between items-center mt-4 px-2">
                    <p className="text-sm sm:text-base text-[#c7a1fc] hover:scale-105 duration-300">
                      {event.location}
                    </p>
                    <p className="text-sm sm:text-base text-[#c7a1fc] hover:scale-105 duration-300">
                      {event.time}
                    </p>
                  </footer>
                </div>
              </div>
            ))}
          </div>

          <h2 className=" w-full flex justify-start p-2 mt-8">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent hover:scale-105 duration-300">
              PAST
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                eventTitle: "Test Event Name",
                description:
                  "Join us for an interactive session on product strategy fundamentals. Learn from industry experts and network with fellow product enthusiasts.",
                location: "test location",
                time: "test time",
              },
              {
                eventTitle: "Test Event Name",
                description: "This is a test description for the test event",
                location: "test location",
                time: "test time",
              },
              {
                eventTitle: "Test Event Name",
                description: "This is a test description for the test event",
                location: "test location",
                time: "test time",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] rounded-xl p-2 h-80 transition-transform hover:scale-105 duration-300"
              >
                <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl bg-gradient-to-r from-[#D5B8FF] via-[#98FFD6] to-[#FFD6A5] bg-clip-text text-transparent hover:scale-105 duration-300">
                    {event.eventTitle}
                  </h3>
                  <p className="flex-grow mt-4 text-sm sm:text-base text-[#c7a1fc] overflow-auto">
                    {event.description}
                  </p>
                  <footer className="flex justify-between items-center mt-4 px-2">
                    <p className="text-sm sm:text-base text-[#c7a1fc] hover:scale-105 duration-300">
                      {event.location}
                    </p>
                    <p className="text-sm sm:text-base text-[#c7a1fc] hover:scale-105 duration-300">
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
