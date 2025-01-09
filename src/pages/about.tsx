export const AboutPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <main className="flex w-full items-center p-6 space-x-4">
          <div id="1" className="flex h-screen flex-1">
            <div className="flex flex-col h-full w-full rounded-xl shadow-2xl p-4 bg-white/70 ring-4 ring-lavender">
              <div className="flex text-lavender text-3xl font-bold w-full justify-center mt-4">
                <h1>ABOUT PMC</h1>
              </div>
              <div className="flex w-full mt-4 text-black font-thin text-xl p-6">
                This is a parapgraph talking about the club. People have this
                section so that people know about the club. If someone doesn't
                have this section about the club, then no one will know what
                this club is about. I would love to have this about page on the
                websiite.
              </div>
              <div className="flex w-full mt-4 p-6 justify-center">
                <img
                  className="w-2/3 rounded-xl shadow-lg"
                  src="src/assets/PM Club (1).png"
                />
              </div>
              <div className="flex w-full mt-4 text-black font-thin text-xl p-6">
                This is a parapgraph talking about the club. People have this
                section so that people know about the club. If someone doesn't
                have this section about the club, then no one will know what
                this club is about. I would love to have this about page on the
                websiite.
              </div>
            </div>
          </div>
          <div id="2" className="flex flex-col flex-1 space-y-6 h-screen">
            <div className="h-1/2 w-full rounded-xl shadow-2xl bg-white/80 p-4 ring-4 ring-orange-200">
              <div className="flex text-[#FFD6A5] text-3xl font-bold w-full justify-center mt-4 ring">
                <h1>UPCOMING EVENTS</h1>
              </div>
              <div className="flex w-full ring mt-4 py-10 space-x-4">
                <div className="flex w-1/2 ring"></div>
                <div className="flex flex-col w-1/2 p-2 ring space-y-4">
                  <div className="w-full ring"></div>
                  <div className="w-full ring"></div>
                  <div className="w-full ring"></div>
                  <div className="w-full ring"></div>
                </div>
              </div>
            </div>
            <div className="h-1/2 w-full rounded-xl shadow-2xl bg-white/80 p-4 ring-4 ring-green-300">
              <div className="flex text-[#98FFD6] text-3xl font-bold w-full justify-center mt-4 ring">
                <h1>JOIN</h1>
              </div>
              <div className="flex w-full mt-4 ring"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
