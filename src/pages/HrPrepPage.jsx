import React, { useState } from 'react';
import { UserCheck, Search, Filter, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { HR_QUESTIONS } from '../data/hrQuestionsData';
import { HrQuestionCard } from '../features/hr/HrQuestionCard';

export const HrPrepPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'all',
    'Introduction & Elevator Pitch',
    'Value Proposition & Fit',
    'Company Alignment & Culture',
    'Self-Awareness & Growth Mindset',
    'Policy & Availability',
    'Career Vision & Ambition'
  ];

  const filteredQuestions = HR_QUESTIONS.filter((q) => {
    const matchCat = selectedCategory === 'all' || q.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.sampleAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.companyTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Behavioral & Cultural Fit Coaching
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Linguistic Confidence Scoring
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          HR Interview Practice & Verbal Feedback
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Master behavioral questions with high-impact STAR responses. Type your answers to receive instant linguistic evaluations on clarity, confidence, filler word count, and improved delivery rewrites.
        </p>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                selectedCategory.toLowerCase() === c.toLowerCase()
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {c === 'all' ? 'All HR Categories' : c}
            </button>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => (
          <HrQuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
};
