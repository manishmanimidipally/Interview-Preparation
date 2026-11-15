import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowRight, CheckCircle2, Award, Briefcase, ChevronRight } from 'lucide-react';
import { useBookmarks } from '../../context/BookmarkContext';
import { Badge } from '../../components/common/Badge';

export const CompanyCard = ({ company }) => {
  const { isCompanyBookmarked, toggleCompanyBookmark } = useBookmarks();
  const bookmarked = isCompanyBookmarked(company.id);

  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg text-white shadow-md ${company.badgeBg || 'bg-indigo-600'}`}
              style={{ backgroundColor: company.accentColor }}
            >
              {company.logoText}
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {company.name}
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {company.category}
              </span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleCompanyBookmark(company.id);
            }}
            className={`p-2 rounded-xl transition-colors ${
              bookmarked
                ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950 dark:text-indigo-400'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title={bookmarked ? 'Saved to favorites' : 'Save company'}
          >
            <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Description */}
        <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {company.description}
        </p>

        {/* Roles Available */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
              Key Hiring Roles
            </span>
            <Badge variant={company.difficulty} size="xs">
              {company.difficulty}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {company.roles.slice(0, 3).map((r) => (
              <span
                key={r.id}
                className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
              >
                {r.title}
              </span>
            ))}
          </div>
        </div>

        {/* Rounds Indicator */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {company.interviewRounds.length} Rounds:
          </span>
          <span className="truncate">
            {company.interviewRounds.map(r => r.title.split(' ')[0]).join(' → ')}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          {company.roles[0]?.package || 'Competitive'}
        </span>
        <Link
          to={`/companies/${company.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          Prepare Now
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
