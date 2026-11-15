import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Code2, Filter, Search, ChevronRight, CheckCircle2, Bookmark } from 'lucide-react';
import { CODING_QUESTIONS } from '../data/codingQuestionsData';
import { CodeEditor } from '../features/coding/CodeEditor';
import { Badge } from '../components/common/Badge';
import { VerificationTag } from '../components/common/VerificationTag';

export const CodingPracticePage = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const [selectedQuestion, setSelectedQuestion] = useState(() => {
    if (questionId) {
      return CODING_QUESTIONS.find(q => q.id === questionId) || CODING_QUESTIONS[0];
    }
    return CODING_QUESTIONS[0];
  });

  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (questionId) {
      const found = CODING_QUESTIONS.find(q => q.id === questionId);
      if (found) setSelectedQuestion(found);
    }
  }, [questionId]);

  const topics = [
    'all',
    'Arrays',
    'Strings',
    'Searching and Sorting',
    'Linked Lists',
    'Stack and Queue',
    'Trees',
    'Dynamic Programming',
    'Java programming challenges'
  ];

  const filteredQuestions = CODING_QUESTIONS.filter((q) => {
    const matchTopic = selectedTopic === 'all' || q.topic.toLowerCase() === selectedTopic.toLowerCase();
    const matchDiff = selectedDifficulty === 'all' || q.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    const matchSearch =
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.companyTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchTopic && matchDiff && matchSearch;
  });

  const handleSelect = (q) => {
    setSelectedQuestion(q);
    navigate(`/coding/${q.id}`, { replace: true });
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Filters */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-soft space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              Company-Specific Coding Practice
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Multi-language code runner with test case suites for campus placement drives
            </p>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="all">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Topic Filters */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTopic(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                selectedTopic.toLowerCase() === t.toLowerCase()
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {t === 'all' ? 'All Coding Topics' : t}
            </button>
          ))}
        </div>

        {/* Quick Problem Switcher Carousel */}
        <div className="flex gap-2 overflow-x-auto pb-1 pt-2">
          {filteredQuestions.map((q) => (
            <button
              key={q.id}
              onClick={() => handleSelect(q)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold text-left shrink-0 transition-all border ${
                selectedQuestion.id === q.id
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="truncate max-w-[140px]">{q.title}</span>
                <span className={`w-2 h-2 rounded-full ${q.difficulty === 'Easy' ? 'bg-emerald-500' : q.difficulty === 'Medium' ? 'bg-amber-500' : 'bg-rose-500'}`} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Code Editor */}
      <CodeEditor question={selectedQuestion} />
    </div>
  );
};
