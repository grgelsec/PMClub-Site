import { Link } from "react-router-dom";

export const JoinPage = () => {
  const joinOptions = [
    {
      title: "Join Our Slack Community",
      description: "Connect with fellow product enthusiasts, get event updates, and participate in discussions.",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      action: "Join Slack",
      link: "https://join.slack.com/t/productmanage-tps7335/shared_invite/zt-2ybtg0oqc-OrB3KqjS11tgdRwSuaxJNg",
      color: "from-primary/20 to-primary/10 border-primary/30",
      buttonColor: "from-primary to-primary-dark hover:from-primary-dark hover:to-primary"
    },
    {
      title: "Become a Member",
      description: "Apply to become an official member and access exclusive opportunities, mentorship, and leadership roles.",
      icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
      action: "Apply Now",
      link: "https://forms.gle/rwXoyybpenYsGCTX7",
      color: "from-accent/20 to-accent/10 border-accent/30",
      buttonColor: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
    },
    {
      title: "Attend Our Events",
      description: "Start by attending our upcoming events to learn more about product management and meet the community.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      action: "View Events",
      link: "/events",
      color: "from-secondary/20 to-secondary/10 border-secondary/30",
      buttonColor: "from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary"
    }
  ];

  const benefits = [
    {
      title: "Network with Industry Leaders",
      description: "Connect with experienced product managers from top tech companies",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Hands-On Experience",
      description: "Work on real projects and build your product management portfolio",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "Career Development",
      description: "Get mentorship, resume reviews, and interview preparation",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Exclusive Opportunities",
      description: "Access to internships, job opportunities, and industry events",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    }
  ];

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
            JOIN
            <span className="block bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
              PMC
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide">
            Start your journey in product management with a community of passionate innovators and future leaders.
          </p>
        </div>
      </div>

      {/* Join Options Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the path that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {joinOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={option.icon} />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight text-center">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-center">
                  {option.description}
                </p>

                 {/* CTA Button */}
                 <div className="mt-auto">
                   {option.link.startsWith('http') ? (
                     <a
                       href={option.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className={`block w-full bg-gradient-to-r ${option.buttonColor} text-white py-4 px-6 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg text-center`}
                     >
                       {option.action}
                     </a>
                   ) : (
                     <Link
                       to={option.link}
                       className={`block w-full bg-gradient-to-r ${option.buttonColor} text-white py-4 px-6 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg text-center`}
                     >
                       {option.action}
                     </Link>
                   )}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Why Join PMC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of being part of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need prior experience in product management?</h3>
              <p className="text-gray-600 leading-relaxed">No prior experience is required! Our community welcomes students from all backgrounds who are interested in learning about product management.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much time do I need to commit?</h3>
              <p className="text-gray-600 leading-relaxed">Most members attend 1-2 events per month. Leadership roles require more commitment, but you can participate at your own pace.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are there membership fees?</h3>
              <p className="text-gray-600 leading-relaxed">No, membership is completely free! We believe in making product management education accessible to all students.</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I join if I'm not studying business or computer science?</h3>
              <p className="text-gray-600 leading-relaxed">Absolutely! Product management draws from many disciplines. We welcome students from all majors who are passionate about technology and user experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join thousands of students who are building their future in product management.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://join.slack.com/t/productmanage-tps7335/shared_invite/zt-2ybtg0oqc-OrB3KqjS11tgdRwSuaxJNg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25"
              >
                Join Our Slack Community
              </a>
              <Link
                to="/about"
                className="bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-xl border-2 border-white/30"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
