import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const MetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  color = 'indigo',
  badgeText
}) => {
  const colorMap = {
    indigo: {
      bg: 'bg-indigo-50 dark:bg-indigo-950/40',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-100 dark:border-indigo-900/50'
    },
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-100 dark:border-blue-900/50'
    },
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/40',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-100 dark:border-emerald-900/50'
    },
    amber: {
      bg: 'bg-amber-50 dark:bg-amber-950/40',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-100 dark:border-amber-900/50'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-950/40',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-100 dark:border-purple-900/50'
    }
  };

  const currentTheme = colorMap[color] || colorMap.indigo;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all duration-200">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</span>
        {Icon && (
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${currentTheme.bg} ${currentTheme.text}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {value}
        </h3>
        {badgeText && (
          <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            {badgeText}
          </span>
        )}
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-xs">
        {trend && (
          <span className={`inline-flex items-center font-semibold ${trend > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
            {trend > 0 ? <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
            {Math.abs(trend)}%
          </span>
        )}
        <span className="text-slate-500 dark:text-slate-400">{subtitle}</span>
      </div>
    </div>
  );
};
