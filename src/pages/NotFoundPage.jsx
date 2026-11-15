import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
      <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-md">
        <Compass className="w-8 h-8 animate-spin-slow" />
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
        404 — Page Not Found
      </h1>
      <p className="text-xs sm:text-sm text-slate-500 max-w-md">
        The interview preparation track or question resource you are looking for does not exist or has been relocated.
      </p>
      <div className="pt-2 flex items-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
        >
          <span>Candidate Dashboard</span>
        </Link>
      </div>
    </div>
  );
};
