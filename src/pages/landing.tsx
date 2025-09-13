import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-white to-secondary/10">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-10">
              <img
                className="h-28 w-auto mx-auto transition-all duration-500 hover:scale-105 drop-shadow-lg"
                src="/assets/pmcLogo.png"
                alt="PMC Logo"
              />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
              <span className="block mb-2 text-gray-800">PRODUCT</span>
              <span className="block mb-2 text-gray-800">MANAGEMENT</span>
              <span className="block bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent font-extrabold">
                CLUB
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide">
              "TECHNOLOGY IS MORE THAN CODING"
            </p>

            {/* Value Proposition */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 mb-12 max-w-5xl mx-auto shadow-2xl border border-white/30">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8 tracking-tight">
                Why Join PMC?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg
                      className="w-10 h-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">
                    Hands-On Experience
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Real-world projects and workshops to build your PM skills
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg
                      className="w-10 h-10 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">
                    Network & Connect
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connect with industry professionals and fellow students
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg
                      className="w-10 h-10 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">
                    Career Growth
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Build your resume and prepare for PM roles at top companies
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/join"
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-10 py-5 rounded-2xl font-bold text-xl tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25 uppercase"
              >
                Join Our Community
              </Link>
              <Link
                to="/events"
                className="bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-xl tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-xl border-2 border-white/30 uppercase"
              >
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/60 via-white/40 to-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <div className="text-5xl lg:text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-all duration-500 drop-shadow-sm">
                #
              </div>
              <div className="text-gray-700 font-semibold text-lg tracking-wider uppercase">
                Active Members
              </div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-black text-accent mb-4 group-hover:scale-110 transition-all duration-500 drop-shadow-sm">
                #
              </div>
              <div className="text-gray-700 font-semibold text-lg tracking-wider uppercase">
                Events This Semester
              </div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-black text-secondary mb-4 group-hover:scale-110 transition-all duration-500 drop-shadow-sm">
                #
              </div>
              <div className="text-gray-700 font-semibold text-lg tracking-wider uppercase">
                Industry Partners
              </div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-all duration-500 drop-shadow-sm">
                100%
              </div>
              <div className="text-gray-700 font-semibold text-lg tracking-wider uppercase">
                Student-Run
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
