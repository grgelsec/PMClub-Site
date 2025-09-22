import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-white to-secondary/10 pt-16">
      {/* Hero Section */}
       <div className="px-4 sm:px-6 lg:px-8 py-16">
         <div className="max-w-7xl mx-auto text-center">
           {/* Logo */}
           <div className="mb-10">
             <img
               className="h-28 w-auto mx-auto transition-all duration-500 hover:scale-105 drop-shadow-lg"
               src="/assets/pmcLogo.png"
               alt="PMC Logo"
             />
           </div>

           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            ABOUT
            <span className="block bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
              PMC
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide">
            Building the next generation of product leaders through innovation, collaboration, and real-world experience.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
             {/* Left Side - Our Mission (Full Height) */}
             <div className="h-full">
               <div className="bg-gradient-to-br from-primary/15 to-accent/15 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300 h-full flex flex-col justify-center">
                 <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 tracking-tight">
                   Our Mission
                 </h2>
                 <p className="text-lg text-gray-700 leading-relaxed mb-6">
                   At Product Management Club, we bridge the gap between innovation and execution. Our community brings together aspiring product managers, designers, and tech enthusiasts to learn, collaborate, and grow together in the dynamic field of product management.
                 </p>
                 <p className="text-lg text-gray-700 leading-relaxed">
                   We believe that great products are built by diverse teams working together. That's why we create an inclusive environment where students from all backgrounds can develop their skills, build meaningful connections, and launch successful careers in product management.
                 </p>
               </div>
             </div>

             {/* Right Side - Split Vertically */}
             <div className="flex flex-col gap-8 h-full">
                {/* Top Half - Opportunities */}
                <div className="h-1/2">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-wide text-center">
                      Opportunities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Hear from Experts */}
                      <div className="text-center group">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Hear from Experts</h4>
                        <p className="text-sm text-gray-600">FAANG & F500 PM insights</p>
                      </div>

                      {/* Network */}
                      <div className="text-center group">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Network</h4>
                        <p className="text-sm text-gray-600">Connect with professionals</p>
                      </div>

                      {/* Real Projects */}
                      <div className="text-center group">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Real Projects</h4>
                        <p className="text-sm text-gray-600">Community PM work</p>
                      </div>
                    </div>
                  </div>
                </div>

               {/* Bottom Half - What Makes Us Different */}
               <div className="h-1/2">
                 <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/20 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-wide">
                      What Makes Us Different
                    </h3>
                   <ul className="space-y-3 text-gray-700">
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                       <span>Hands-on workshops with real industry tools and methodologies</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></span>
                       <span>Direct mentorship from experienced product leaders</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                       <span>Collaborative projects that build your portfolio</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                       <span>Networking opportunities with top tech companies</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">We embrace new ideas and cutting-edge approaches to product development.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">We believe in the power of teamwork and diverse perspectives.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">We strive for the highest standards in everything we do.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">Community</h3>
              <p className="text-gray-600 leading-relaxed">We build lasting relationships and support each other's growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 tracking-tight">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Connect with like-minded students and start your journey in product management today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/join"
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25"
              >
                Join PMC Today
              </Link>
              <Link
                to="/events"
                className="bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-xl border-2 border-white/30"
              >
                View Our Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
