export const AboutPage = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <main className="flex w-full items-center p-4 space-x-4">
          <div id="1" className="flex h-screen flex-1">
            <div className="flex flex-col h-full w-full rounded-xl shadow-2xl p-4 bg-white/70">
              <div className="flex text-lavender text-3xl font-bold w-full ring justify-center mt-4">
                <h1>ABOUT PMC</h1>
              </div>
            </div>
          </div>
          <div id="2" className="flex flex-col flex-1 space-y-4 h-screen">
            <div className="h-1/2 w-full rounded-xl shadow-2xl bg-white/80">
              <div className="flex text-[#FFD6A5] text-3xl font-bold w-full ring justify-center mt-4">
                <h1>UPCOMING EVENTS</h1>
              </div>
            </div>
            <div className="h-1/2 w-full rounded-xl shadow-2xl bg-white/80">
              <div className="flex text-[#98FFD6] text-3xl font-bold w-full ring justify-center mt-4">
                <h1>JOIN</h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
