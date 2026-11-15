import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const WeakTopicsAlert = ({ weakTopics = [] }) => {
  const topics = weakTopics.length > 0 ? weakTopics : [
    { title: 'Multithreading & Locks', domain: 'Technical Round', accuracy: '45%', link: '/technical?topic=Multithreading' },
    { title: 'Dynamic Programming (Grid DP)', domain: 'Coding Round', accuracy: '52%', link: '/coding?topic=Dynamic Programming' },
    { title: 'B-Tree Indexing Internals', domain: 'Technical Round', accuracy: '60%', link: '/technical?topic=DBMS' }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
          <AlertTriangle className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Focus Areas & Weak Topics Alert
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Topics where your practice accuracy fell below target benchmark (70%)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {topics.map((t, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-amber-700 dark:text-amber-400">
                  {t.domain}
                </span>
                <span className="font-bold text-rose-600 dark:text-rose-400">
                  {t.accuracy} Accuracy
                </span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {t.title}
              </h4>
            </div>

            <Link
              to={t.link}
              className="mt-4 inline-flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 pt-2 border-t border-amber-200/50 dark:border-amber-900/30"
            >
              <span>Practice Questions Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
