import React, { useState } from 'react';
import { Bot, Sparkles, Building2, Briefcase, Layers, Clock, ArrowRight } from 'lucide-react';
import { COMPANIES_DATA } from '../../data/companiesData';

export const InterviewSetup = ({ onStartInterview }) => {
  const [selectedCompanyId, setSelectedCompanyId] = useState('infosys');
  const [selectedRole, setSelectedRole] = useState('Java Developer');
  const [selectedRound, setSelectedRound] = useState('Technical Round');
  const [questionCount, setQuestionCount] = useState(3);
  const [durationPerQuestion, setDurationPerQuestion] = useState(120); // 120 seconds

  const currentCompany = COMPANIES_DATA.find(c => c.id === selectedCompanyId) || COMPANIES_DATA[0];

  const handleCompanyChange = (e) => {
    const compId = e.target.value;
    setSelectedCompanyId(compId);
    const comp = COMPANIES_DATA.find(c => c.id === compId);
    if (comp && comp.roles.length > 0) {
      setSelectedRole(comp.roles[0].title);
    }
  };

  const handleStart = (e) => {
    e.preventDefault();
    onStartInterview({
      company: currentCompany.name,
      role: selectedRole,
      round: selectedRound,
      questionCount,
      durationPerQuestion
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft">
      <div className="text-center space-y-2 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-sm">
          <Bot className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Configure Your AI Mock Interview
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Simulate a real-time timed interview session with observable response pattern evaluation.
        </p>
      </div>

      <form onSubmit={handleStart} className="space-y-5 text-xs">
        {/* Company Selector */}
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-indigo-500" />
            Select Target Company
          </label>
          <select
            value={selectedCompanyId}
            onChange={handleCompanyChange}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 font-medium"
          >
            {COMPANIES_DATA.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.category})
              </option>
            ))}
          </select>
        </div>

        {/* Role Selector */}
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-indigo-500" />
            Target Job Role
          </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 font-medium"
          >
            {currentCompany.roles.map((r) => (
              <option key={r.id} value={r.title}>
                {r.title} ({r.expLevel})
              </option>
            ))}
          </select>
        </div>

        {/* Round Selector */}
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-500" />
            Interview Round
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'Technical Round', label: 'Technical' },
              { id: 'HR Round', label: 'HR & Fit' },
              { id: 'Project Discussion', label: 'Project Viva' },
              { id: 'Comprehensive', label: 'Mixed Round' }
            ].map((round) => (
              <button
                type="button"
                key={round.id}
                onClick={() => setSelectedRound(round.id)}
                className={`py-2 px-3 rounded-xl border font-semibold text-center transition-all ${
                  selectedRound === round.id
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {round.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question Count & Timer config */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              Number of Questions
            </label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value={2}>2 Questions (Express 5m)</option>
              <option value={3}>3 Questions (Standard 10m)</option>
              <option value={5}>5 Questions (In-depth 18m)</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              Timer per Question
            </label>
            <select
              value={durationPerQuestion}
              onChange={(e) => setDurationPerQuestion(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value={90}>90 seconds</option>
              <option value={120}>2 minutes (Standard)</option>
              <option value={180}>3 minutes (Deep dive)</option>
            </select>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Enter AI Mock Interview Room</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center text-[11px] text-slate-400 mt-2">
            No webcam or microphone permissions required. You can type or paste verbal transcripts.
          </p>
        </div>
      </form>
    </div>
  );
};
