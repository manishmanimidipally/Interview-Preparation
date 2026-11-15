import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  Search,
  Sun,
  Moon,
  Bookmark,
  User,
  LogOut,
  Menu,
  X,
  Target,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useBookmarks } from '../../context/BookmarkContext';
import { NotificationDropdown } from './NotificationDropdown';

export const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { bookmarks } = useBookmarks();
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/companies?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const totalBookmarks = (bookmarks.companies?.length || 0) + (bookmarks.questions?.length || 0);

  return (
    <header className="sticky top-0 z-40 w-full glass-card border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Left: Mobile hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                InterviewPilot <span className="text-xs px-1.5 py-0.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold tracking-normal uppercase">AI</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Search input */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies (TCS, Infosys, Amazon...) or topics..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400"
            />
          </form>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Target Company Badge for logged in student */}
          {isAuthenticated && user?.targetCompany && (
            <Link
              to={`/companies/${user.targetCompany.toLowerCase()}`}
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition-colors"
            >
              <Target className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
              <span>Target: {user.targetCompany}</span>
            </Link>
          )}

          {/* Bookmarks link */}
          <Link
            to="/dashboard#bookmarks"
            className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Bookmarked Questions & Companies"
          >
            <Bookmark className="w-5 h-5" />
            {totalBookmarks > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-indigo-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {totalBookmarks}
              </span>
            )}
          </Link>

          {/* Notifications dropdown */}
          <NotificationDropdown />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>

          {/* User profile dropdown or Auth CTA */}
          {isAuthenticated && user ? (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
              >
                <img
                  src={user.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250'}
                  alt={user.name}
                  className="w-8 h-8 rounded-xl object-cover ring-2 ring-indigo-500/20"
                />
                <div className="hidden sm:block text-left text-xs">
                  <p className="font-semibold text-slate-900 dark:text-white leading-tight">{user.name}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[100px]">{user.targetCompany || 'Candidate'}</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              </button>

              {showProfileMenu && (
                <div
                  onMouseLeave={() => setShowProfileMenu(false)}
                  className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-1 z-50 animate-fadeIn text-xs"
                >
                  <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="font-bold text-slate-900 dark:text-white">{user.name}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] truncate">{user.email}</p>
                    <span className="mt-1.5 inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                      {user.experienceLevel} • Class of {user.graduationYear}
                    </span>
                  </div>

                  <Link
                    to="/profile-setup"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <User className="w-4 h-4 text-slate-400" />
                    Edit Student Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Target className="w-4 h-4 text-slate-400" />
                    My Dashboard
                  </Link>

                  <div className="border-t border-slate-100 dark:border-slate-800 my-1" />

                  <button
                    onClick={() => {
                      logout();
                      setShowProfileMenu(false);
                      navigate('/');
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
