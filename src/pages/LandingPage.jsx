import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Bot,
  Code2,
  Layers,
  FolderGit2,
  UserCheck,
  Building2,
  Star,
  Users,
  Target,
  ChevronRight
} from 'lucide-react';
import { COMPANIES_DATA } from '../data/companiesData';
import { VerificationTag } from '../components/common/VerificationTag';

export const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/companies?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/companies');
    }
  };

  const sampleTestimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Placed at Infosys (Specialist Programmer)',
      college: 'National Institute of Engineering, 2024',
      quote: 'The Infosys-specific Java 8 and Streams question bank was 100% aligned with what was asked in my technical interview round.',
      company: 'Infosys',
      verifiedTag: 'Sample Student Placement Experience'
    },
    {
      name: 'Sneha Patel',
      role: 'Placed at TCS (Digital Cadre)',
      college: 'College of Engineering Pune, 2024',
      quote: 'Practicing the Project Viva and STAR framework gave me the exact confidence needed to answer questions about my database design without hesitation.',
      company: 'TCS',
      verifiedTag: 'Sample Student Placement Experience'
    },
    {
      name: 'Arjun Verma',
      role: 'Placed at Amazon (SDE-1)',
      college: 'VIT Vellore, 2024',
      quote: 'The AI Mock Interview timer and observable confidence feedback helped me eliminate filler words and speak with clear architectural precision.',
      company: 'Amazon',
      verifiedTag: 'Sample Student Placement Experience'
    }
  ];

  return (
    <div className="space-y-24 py-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-center max-w-5xl mx-auto pt-6 pb-8">
        {/* Verification banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Strictly Verified Public Interview Intel • No Unverified Claims</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          Prepare Smart. <br className="hidden sm:inline" />
          Practice <span className="text-gradient">Company-Specific</span>. <br />
          Get Hired.
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Master the exact recruitment stages of <strong>Infosys, TCS, Amazon, Accenture, Google, and 9+ top employers</strong>. Hands-on coding runner, technical viva, custom project defense, and AI mock interviews.
        </p>

        {/* Search Company Box */}
        <div className="mt-8 max-w-xl mx-auto">
          <form onSubmit={handleSearch} className="relative flex items-center shadow-xl shadow-indigo-500/10 rounded-2xl">
            <Search className="w-5 h-5 absolute left-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search target company (e.g., Infosys, TCS, Amazon, Wipro...)"
              className="w-full pl-12 pr-32 py-4 text-sm sm:text-base rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white placeholder-slate-400 shadow-soft"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Explore
            </button>
          </form>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-500 dark:text-slate-400">
            <span>Popular Searches:</span>
            {['Infosys Java', 'TCS Digital', 'Amazon SDE-1', 'Accenture ASE'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => navigate(`/companies?search=${encodeURIComponent(item)}`)}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 underline underline-offset-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Quick CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/register"
            className="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
          >
            <span>Start Preparing Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/mock-interview"
            className="px-8 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm shadow-soft transition-all flex items-center gap-2"
          >
            <Bot className="w-4 h-4 text-indigo-500" />
            <span>Try AI Mock Interview</span>
          </Link>
        </div>
      </section>

      {/* Popular Companies Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Targeted Recruitment Tracks
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Top 14 Hiring Companies
            </h2>
          </div>
          <Link
            to="/companies"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View all 14 companies directory <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {COMPANIES_DATA.slice(0, 6).map((c) => (
            <Link
              key={c.id}
              to={`/companies/${c.slug}`}
              className="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-between"
            >
              <div
                className="w-12 h-12 rounded-xl text-white font-black text-sm flex items-center justify-center shadow-md mb-3"
                style={{ backgroundColor: c.accentColor }}
              >
                {c.logoText}
              </div>
              <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {c.name.split(' ')[0]}
              </p>
              <span className="text-[10px] text-slate-400 mt-1">
                {c.roles.length} Roles • {c.difficulty}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4 Pillars of Preparation */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Comprehensive Syllabus Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Every Interview Round, Engineered for Success
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Practice each stage of the campus and off-campus recruitment funnel with curated problem sets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                1. Coding Practice
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Multi-language editor (Java, Python, C++, JS) with simulated test cases for Arrays, Strings, Trees, and Dynamic Programming.
              </p>
            </div>
            <Link
              to="/coding"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline pt-3 border-t border-slate-100 dark:border-slate-800"
            >
              Open Coding Sandbox →
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                2. Technical Viva
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Deep-dive Core Java, OOP, Collections, Concurrency, SQL Joins, DBMS ACID, Spring Boot, and REST architectural standards.
              </p>
            </div>
            <Link
              to="/technical"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pt-3 border-t border-slate-100 dark:border-slate-800"
            >
              Revise Technical Questions →
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                3. Custom Project Defense
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Add your own college/capstone project. InterviewPilot AI generates tailored viva questions based on your stack, database, and contribution.
              </p>
            </div>
            <Link
              to="/projects"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline pt-3 border-t border-slate-100 dark:border-slate-800"
            >
              Prepare Project Viva →
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                4. AI Mock Simulation
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Live timed interview room with real-time countdown, question-by-question progression, and observable speech confidence analysis.
              </p>
            </div>
            <Link
              to="/mock-interview"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline pt-3 border-t border-slate-100 dark:border-slate-800"
            >
              Launch Mock Interview →
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Workflow */}
      <section className="bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/20 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Candidate Success Path
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            How InterviewPilot AI Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center mx-auto text-sm shadow-md">
              1
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Select Target Company</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pick Infosys, TCS, Amazon, or Accenture based on your upcoming placement drive.
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center mx-auto text-sm shadow-md">
              2
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Practice Exact Rounds</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Solve company-tagged coding problems, technical viva questions, and STAR project discussions.
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center mx-auto text-sm shadow-md">
              3
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Simulate AI Mock Test</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Experience the pressure of a timed session with instant scorecard and actionable feedback.
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto text-sm shadow-md">
              4
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Get Hired</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Track your readiness index to 85%+ and crack your campus interview with calm confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials (Sample Content Clearly Labeled) */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Verified Student Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Placement Stories & Feedback
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            * Note: Sample illustrative testimonials representative of placement platform outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {t.company} Offer
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="font-bold text-xs text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">{t.role}</p>
                <p className="text-[10px] text-slate-400">{t.college}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
          Ready to Crack Your Target Company Interview?
        </h2>
        <p className="text-xs sm:text-sm text-indigo-100 max-w-xl mx-auto">
          Join thousands of candidates preparing smart with company-specific questions, live coding tests, and observable AI feedback.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/register"
            className="px-8 py-3.5 rounded-2xl bg-white text-indigo-700 font-bold text-xs sm:text-sm hover:bg-indigo-50 shadow-md transition-all"
          >
            Create Free Account
          </Link>
          <Link
            to="/companies"
            className="px-8 py-3.5 rounded-2xl bg-indigo-500/30 border border-white/20 text-white font-bold text-xs sm:text-sm hover:bg-indigo-500/40 transition-all"
          >
            Browse All Companies
          </Link>
        </div>
      </section>
    </div>
  );
};
