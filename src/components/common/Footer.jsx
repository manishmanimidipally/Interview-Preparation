import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, Heart, Github, Linkedin, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-1 space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                InterviewPilot AI
              </span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Company-specific interview preparation platform for fresh graduates and ambitious job seekers.
            </p>
          </div>

          {/* Popular Companies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Target Companies
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <li><Link to="/companies/infosys" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Infosys (Java & SP)</Link></li>
              <li><Link to="/companies/tcs" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">TCS (Ninja & Digital)</Link></li>
              <li><Link to="/companies/amazon" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Amazon (SDE-1)</Link></li>
              <li><Link to="/companies/accenture" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Accenture (ASE & AASE)</Link></li>
              <li><Link to="/companies" className="text-indigo-600 dark:text-indigo-400 font-medium">View all 14 Companies →</Link></li>
            </ul>
          </div>

          {/* Prep Tracks */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Preparation Tracks
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <li><Link to="/coding" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Coding Practice Runner</Link></li>
              <li><Link to="/technical" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Core Java & Spring Boot Viva</Link></li>
              <li><Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Project STAR Framework</Link></li>
              <li><Link to="/mock-interview" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">AI Mock Interview Room</Link></li>
              <li><Link to="/hr" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">HR Round Feedback</Link></li>
            </ul>
          </div>

          {/* Verification Statement & Policy */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Verification Guarantee
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
              We strictly distinguish <strong>Verified Public Experiences</strong>, <strong>Commonly Reported Questions</strong>, and <strong>AI-Generated Practice</strong> with dates & sources. No proprietary NDA content is hosted.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} InterviewPilot AI. Designed for aspiring software engineers.</p>
          <div className="flex items-center gap-4">
            <Link to="/companies" className="hover:text-slate-600 dark:hover:text-slate-300">Directory</Link>
            <Link to="/dashboard" className="hover:text-slate-600 dark:hover:text-slate-300">Dashboard</Link>
            <Link to="/analytics" className="hover:text-slate-600 dark:hover:text-slate-300">Analytics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
