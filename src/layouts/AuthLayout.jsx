import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Compass, ShieldCheck, Sparkles } from 'lucide-react';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Compass className="w-6 h-6" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
            InterviewPilot <span className="text-indigo-600">AI</span>
          </span>
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-slate-900 py-8 px-6 shadow-soft-lg sm:rounded-3xl border border-slate-200 dark:border-slate-800 sm:px-10">
          <Outlet />
        </div>

        <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Spring Boot REST & JWT Authentication Ready</span>
        </div>
      </div>
    </div>
  );
};
