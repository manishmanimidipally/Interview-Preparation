import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Bot,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  ThumbsUp,
  Bookmark,
  ShieldAlert
} from 'lucide-react';
import { VerificationTag } from '../../components/common/VerificationTag';
import { evaluateInterviewResponse } from '../../utils/evaluationEngine';
import { useBookmarks } from '../../context/BookmarkContext';
import { useProgress } from '../../context/ProgressContext';

export const HrQuestionCard = ({ question }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [evaluation, setEvaluation] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const { isQuestionBookmarked, toggleQuestionBookmark } = useBookmarks();
  const { recordSolvedQuestion } = useProgress();

  const isBookmarked = isQuestionBookmarked(question.id);

  const handleEvaluate = () => {
    if (!userAnswer.trim()) return;
    setIsEvaluating(true);

    setTimeout(() => {
      const result = evaluateInterviewResponse(question, userAnswer, 'hr');
      setEvaluation(result);
      setIsEvaluating(false);

      if (result.overallScore >= 70) {
        recordSolvedQuestion(question.id, question.question, 'hr', question.companyTags[0] || 'General');
      }
    }, 400);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              {question.category}
            </span>
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

          <p className="text-xs text-slate-500 dark:text-slate-400">
            <strong>What Interviewer Assesses: </strong>
            {question.whatHrEvaluates}
          </p>
        </div>

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
      </div>

      {/* Target Companies */}
      <div className="mt-3 flex flex-wrap gap-1.5 items-center">
        <span className="text-[11px] font-medium text-slate-400">Common at:</span>
        {question.companyTags?.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Toggle View */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          {isExpanded ? (
            <>Hide Practice Editor & Model Answer <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>Practice My Answer & View Sample <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      </div>

      {/* Expanded Practice Area */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-5 animate-fadeIn">
          {/* Sample Model Answer */}
          <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> High-Impact Model Answer:
              </span>
              <span className="text-[10px] text-slate-400">STAR Aligned</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line italic">
              {question.sampleAnswer}
            </p>
          </div>

          {/* Dos & Don'ts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
              <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                ✓ What to Emphasize:
              </span>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                {question.tips?.map((t, idx) => (
                  <li key={idx}>• {t}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40">
              <span className="font-bold text-rose-700 dark:text-rose-300 block mb-1">
                ✗ Common Pitfalls to Avoid:
              </span>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                {question.commonPitfalls?.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Answer Editor */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
                Type or speak your answer:
              </label>
              <span className="text-[11px] text-slate-400">
                {userAnswer.trim().split(/\s+/).filter(Boolean).length} words
              </span>
            </div>

            <textarea
              rows={4}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Structure your verbal response here. Keep it clear, professional, and authentic..."
              className="w-full p-3.5 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
            />

            <button
              onClick={handleEvaluate}
              disabled={isEvaluating || !userAnswer.trim()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/25 disabled:opacity-50 transition-all cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              {isEvaluating ? 'Evaluating Response...' : 'Get AI Feedback & Score'}
            </button>
          </div>

          {/* Live AI Feedback Scorecard */}
          {evaluation && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-500" />
                    AI Evaluation Scorecard
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Confidence and clarity assessed via observable speech patterns
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                    {evaluation.overallScore}
                  </span>
                  <span className="text-xs text-slate-400">/100</span>
                </div>
              </div>

              {/* 4 Score Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] text-slate-400 font-medium">Content Relevance</p>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {evaluation.technicalAccuracy}%
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] text-slate-400 font-medium">Clarity & Flow</p>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {evaluation.clarity}%
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] text-slate-400 font-medium">Professional Tone</p>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {evaluation.communication}%
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] text-slate-400 font-medium">Confidence Pattern</p>
                  <p className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {evaluation.confidenceScore}%
                  </p>
                </div>
              </div>

              {/* Observable linguistic feedback */}
              <div className="space-y-2 text-xs">
                {evaluation.strengths.length > 0 && (
                  <div>
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-1">
                      Strengths Identified:
                    </span>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      {evaluation.strengths.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {evaluation.improvements.length > 0 && (
                  <div className="pt-2">
                    <span className="font-semibold text-amber-700 dark:text-amber-400 block mb-1">
                      Actionable Improvements:
                    </span>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      {evaluation.improvements.map((imp, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
