export const Greeting = () => {
  return (
    <div className="h-screen overflow-y-auto bg-white-900">
      {/*Header*/}
      <header className="bg-white shadow-lg fixed top-0 w-full">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/*Title*/}
            <div className="flex items-center">
              <img
                src="/src/assets/pmc-logo.png"
                className="w-20 h-20"
              />
            </div>
            {/*Navigation */}
            <div className="flex flex-1 justify-evenly ml-8">
              <button className="text-blue-900 font-semibold hover:text-blue-200 transition duration-300">
                Home
              </button>
              <button className="text-blue-900 font-semibold hover:text-blue-200 transition duration-300">
                About
              </button>
              <button className="text-blue-900 font-semibold hover:text-blue-200 transition duration-300">
                Events
              </button>
              <button className="text-blue-900 font-semibold hover:text-blue-200 transition duration-300">
                PM
              </button>
              <button className="text-blue-900 font-semibold hover:text-blue-200 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/*Main*/}
      <main className="container mx-auto px-6 py-8 mt-32">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Hello!
        </h1>
      </main>
    </div>
  );
 };