import React from 'react';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';

export const CompanyFilter = ({
  searchQuery,
  setSearchQuery,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedCategory,
  setSelectedCategory,
  categories,
  onReset
}) => {
  const hasActiveFilters = searchQuery || selectedDifficulty !== 'all' || selectedCategory !== 'all';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-soft space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Search */}
        <div className="md:col-span-6 relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter companies by name (e.g., Infosys, TCS, Amazon) or skill..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Difficulty Filter */}
        <div className="md:col-span-3">
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy-Medium">Easy-Medium (Service Giants)</option>
            <option value="Medium">Medium (Digital Cadre)</option>
            <option value="Medium-Hard">Medium-Hard (Tier 1)</option>
            <option value="Hard">Hard (FAANG / Big Tech)</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="md:col-span-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="text-slate-500 dark:text-slate-400">Filters active</span>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            <X className="w-3.5 h-3.5" />
            Reset all
          </button>
        </div>
      )}
    </div>
  );
};
