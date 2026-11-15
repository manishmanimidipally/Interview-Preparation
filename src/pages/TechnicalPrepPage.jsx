import React, { useState } from 'react';
import { Layers, Search, Filter, ShieldCheck, Sparkles, Code2 } from 'lucide-react';
import { TECHNICAL_QUESTIONS } from '../data/technicalQuestionsData';
import { TechnicalCard } from '../features/technical/TechnicalCard';

export const TechnicalPrepPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const technicalTopics = [
    'all',
    'Core Java',
    'OOP concepts',
    'Collections',
    'Exception Handling',
    'Multithreading',
    'Java 8 features',
    'SQL',
    'DBMS',
    'Spring Boot',
    'Hibernate',
    'REST APIs'
  ];

  const filteredQuestions = TECHNICAL_QUESTIONS.filter((q) => {
    const matchTopic = selectedTopic === 'all' || q.topic.toLowerCase() === selectedTopic.toLowerCase();
    const matchDiff = selectedDifficulty === 'all' || q.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    const matchSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answerGuidance.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.companyTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchTopic && matchDiff && matchSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Technical Interview Viva Questions
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified Public Questions
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Core Technical Interview Viva Bank
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Master the exact technical viva questions asked across Infosys, TCS, Amazon, Oracle, Cognizant, and Accenture. Includes model answers, architecture notes, and code snippets.
        </p>

        {/* Search & Topic Filters */}
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technical viva (e.g., HashMap, N+1, ACID, Volatile, REST)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="sm:col-span-4">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="all">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {technicalTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                  selectedTopic.toLowerCase() === topic.toLowerCase()
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {topic === 'all' ? 'All Subjects' : topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Showing <strong>{filteredQuestions.length}</strong> questions</span>
        </div>

        {filteredQuestions.map((q) => (
          <TechnicalCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
};
