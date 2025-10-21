import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import type { User } from "@supabase/supabase-js";

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/team", label: "Team" },
    { path: "/join", label: "Join" },
  ];

  return (
    <>
      {/* Admin Button - Hide on admin page */}
      {location.pathname !== '/admin' && (
        <div className="fixed top-4 right-4 z-50 flex items-center">
          <Link
            to="/admin"
            className="bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-xl border border-black/20 rounded-lg px-4 py-2 text-sm font-semibold text-gray-800 hover:text-[var(--theme-primary)] shadow-inner shadow-gray-300/50 transition-all duration-300 transform hover:scale-105 hover:shadow-primary/25"
            style={{ boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)' }}
          >
            {user ? "Admin Dashboard" : "Admin Login"}
          </Link>
        </div>
      )}

      {/* Navbar - Hide on admin page */}
      {location.pathname !== '/admin' && (
        <nav className="fixed top-4 md:left-1/2 md:transform md:-translate-x-1/2 left-4 z-50">
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl px-4 py-2">
          <div className="flex justify-between items-center h-10">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto transition-all duration-300 hover:scale-110 drop-shadow-lg"
                src="/assets/pmcLogo.png"
                alt="PMC Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-12">
              <div className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                      location.pathname === item.path
                        ? "text-white shadow-lg"
                        : "text-gray-800 hover:text-[var(--theme-primary)] hover:bg-white/40 backdrop-blur-sm"
                    }`}
                    style={location.pathname === item.path ? {
                      backgroundColor: 'var(--theme-primary)',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      filter: 'drop-shadow(0 0 10px rgba(var(--theme-primary), 0.3))'
                    } : {}}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="bg-white/30 backdrop-blur-sm inline-flex items-center justify-center p-2 rounded-2xl hover:bg-white/50 transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{
                  color: 'var(--theme-primary)',
                }}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="md:hidden mt-1 overflow-hidden"
        id="mobile-menu"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-t-none rounded-b-2xl shadow-2xl px-4 py-3">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.path
                    ? "text-white shadow-lg"
                    : "text-gray-800 hover:bg-white/40 backdrop-blur-sm"
                }`}
                style={location.pathname === item.path ? {
                  backgroundColor: 'var(--theme-primary)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  filter: 'drop-shadow(0 0 10px rgba(var(--theme-primary), 0.3))'
                } : {
                  color: location.pathname === item.path ? 'white' : 'var(--theme-primary)'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
      )}
    </>
  );
};