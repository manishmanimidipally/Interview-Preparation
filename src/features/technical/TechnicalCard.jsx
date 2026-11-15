import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Bookmark,
  CheckCircle2,
  Code2,
  Lightbulb,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { VerificationTag } from '../../components/common/VerificationTag';
import { Badge } from '../../components/common/Badge';
import { useBookmarks } from '../../context/BookmarkContext';
import { useProgress } from '../../context/ProgressContext';

export const TechnicalCard = ({ question }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const { isQuestionBookmarked, toggleQuestionBookmark } = useBookmarks();
  const { recordSolvedQuestion, isQuestionSolved } = useProgress();

  const isBookmarked = isQuestionBookmarked(question.id);
  const isPrepared = isQuestionSolved(question.id);

  const handleCopyCode = () => {
    if (question.answerGuidance?.codeSnippet) {
      navigator.clipboard.writeText(question.answerGuidance.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleTogglePrepared = () => {
    recordSolvedQuestion(question.id, question.question, 'technical', question.companyTags[0] || 'General');
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all duration-200">
      {/* Header Info */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              {question.topic}
            </span>
            <Badge variant={question.difficulty} size="xs">
              {question.difficulty}
            </Badge>
            <VerificationTag
              type={question.verificationType}
              source={question.verifiedSource}
              lastVerified={question.lastVerified}
              compact
            />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pt-1">
            {question.question}
          </h3>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => toggleQuestionBookmark(question.id)}
            className={`p-2 rounded-xl transition-colors ${
              isBookmarked
                ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950 dark:text-indigo-400'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Bookmark"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleTogglePrepared}
            className={`p-2 rounded-xl transition-colors ${
              isPrepared
                ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title={isPrepared ? 'Marked as Prepared' : 'Mark as Prepared'}
          >
            <CheckCircle2 className={`w-4 h-4 ${isPrepared ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Company Tag Badges */}
      <div className="mt-3 flex flex-wrap gap-1.5 items-center">
        <span className="text-[11px] font-medium text-slate-400">Asked at:</span>
        {question.companyTags?.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Toggle Expand Button */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          {isExpanded ? (
            <>
              Hide Answer Guidance <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              View Answer Guidance & Snippet <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>

        <span className="text-[11px] text-slate-400">
          Source: {question.verifiedSource || 'Verified Candidate Archives'}
        </span>
      </div>

      {/* Expandable Model Guidance */}
      {isExpanded && question.answerGuidance && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-fadeIn">
          {/* Summary Box */}
          <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
              Core Concept Summary:
            </span>
            {question.answerGuidance.summary}
          </div>

          {/* Key Bullet Points to Mention */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Key Points Interviewers Expect:
            </h4>
            <ul className="space-y-1.5">
              {question.answerGuidance.keyPoints?.map((pt, idx) => (
                <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet if applicable */}
          {question.answerGuidance.codeSnippet && (
            <div className="relative rounded-2xl bg-slate-950 p-4 font-mono text-xs text-emerald-400 overflow-x-auto border border-slate-800">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                <span>Code Implementation</span>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre>{question.answerGuidance.codeSnippet}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
