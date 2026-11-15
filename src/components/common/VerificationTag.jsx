import React, { useState } from 'react';
import { ShieldCheck, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { getVerificationBadgeInfo } from '../../utils/formatters';

export const VerificationTag = ({ type, source, lastVerified, compact = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const info = getVerificationBadgeInfo(type);

  const getIcon = () => {
    switch (type) {
      case 'VERIFIED_PUBLIC':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />;
      case 'COMMONLY_REPORTED':
        return <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />;
      case 'AI_GENERATED':
      default:
        return <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border cursor-help transition-all duration-200 hover:shadow-sm ${info.bgColor}`}
      >
        {getIcon()}
        <span>{compact ? info.shortLabel : info.label}</span>
        {lastVerified && !compact && (
          <span className="text-[10px] opacity-75 hidden sm:inline">({lastVerified})</span>
        )}
      </div>

      {showTooltip && (
        <div className="absolute left-0 bottom-full mb-2 z-50 w-72 p-3 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 animate-fadeIn">
          <div className="flex items-start gap-2 mb-1.5">
            <Info className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">{info.label}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{info.description}</p>
            </div>
          </div>
          {source && (
            <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
              <span className="font-medium text-slate-900 dark:text-slate-200">Source: </span>
              <span className="text-slate-600 dark:text-slate-400">{source}</span>
            </div>
          )}
          {lastVerified && (
            <div className="mt-1 text-[11px]">
              <span className="font-medium text-slate-900 dark:text-slate-200">Last Verified: </span>
              <span className="text-slate-600 dark:text-slate-400">{lastVerified}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
