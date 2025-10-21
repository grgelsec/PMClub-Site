import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

interface CommitteeMember {
  id: string;
  name: string;
  focus: string;
  linkedin: string;
}

export const TeamPage = () => {
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [committeeMembers, setCommitteeMembers] = useState<CommitteeMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      const [boardRes, committeeRes] = await Promise.all([
        supabase.from('board_members').select('*'),
        supabase.from('committee_members').select('*'),
      ]);

      if (boardRes.data) setBoardMembers(boardRes.data);
      if (committeeRes.data) setCommitteeMembers(committeeRes.data);
      setLoading(false);
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  const getRoleColor = (role: string) => {
    if (role.includes("President")) return "from-primary/80 to-primary/60 border-primary/90";
    if (role.includes("Vice")) return "from-accent/80 to-accent/60 border-accent/90";
    if (role.includes("Director")) return "from-secondary/80 to-secondary/60 border-secondary/90";
    return "from-gray-100 to-gray-50 border-gray-200";
  };

  const getRoleIcon = (role: string) => {
    if (role.includes("President")) return "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z";
    if (role.includes("Vice")) return "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z";
    if (role.includes("Director")) return "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4";
    return "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";
  };

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
            OUR
            <span className="block bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
              TEAM
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed tracking-wide">
            Meet the passionate leaders driving innovation and building the future of product management.
          </p>
        </div>
      </div>

      {/* Board Members Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Board Members
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our executive team leading strategic initiatives and community growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Role Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white mb-6 bg-gradient-to-r ${getRoleColor(member.role)}`}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={getRoleIcon(member.role)} />
                  </svg>
                  {member.role}
                </div>

                {/* Member Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Member Bio */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* LinkedIn Link */}
                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 rounded-2xl text-primary font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Committee Members Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Committee Members
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated committee members supporting operations and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Focus Area Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white mb-6 bg-gradient-to-r from-accent/80 to-secondary/60 border border-accent/90">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {member.focus}
                </div>

                {/* Member Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {member.name}
                </h3>

                {/* Member Role */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Committee Member specializing in {member.focus.toLowerCase()}
                </p>

                {/* LinkedIn Link */}
                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl text-gray-900 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white/30"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Team CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 tracking-tight">
              Interested in Joining Our Team?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We're always looking for passionate individuals to help grow our community and drive innovation in product management.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/join"
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25"
              >
                Apply to Join
              </Link>
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

export default TeamPage;