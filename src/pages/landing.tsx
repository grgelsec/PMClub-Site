export const LandingPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center py-8 ">
        <div className="container mx-auto ">
          <div className="flex justify-center items-center ">
            <img src="src/assets/pmcLogo.png" className="w-1/4"></img>
            <div className="space-y-4 bg-[#ffffffe0] shadow-xl p-4 rounded-xl ">
              <h1 className="font-bold text-5xl bg-gradient-to-r from-[#FFD6A5] via-[#98FFD6] to-[#D5B8FF] bg-clip-text text-transparent animate-gradient relative hover:scale-110 transition-transform duration-300">
                PRODUCT MANAGEMENT CLUB
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
