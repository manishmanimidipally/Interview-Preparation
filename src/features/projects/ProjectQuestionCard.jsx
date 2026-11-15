import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, CheckCircle2, MessageSquare, Lightbulb, Bookmark } from 'lucide-react';
import { VerificationTag } from '../../components/common/VerificationTag';

export const ProjectQuestionCard = ({ question, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userDraft, setUserDraft] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleAnalyzeDraft = () => {
    if (!userDraft.trim()) return;
    const words = userDraft.trim().split(/\s+/).length;
    const lower = userDraft.toLowerCase();

    const starMatches = ['situation', 'task', 'action', 'result', 'because', 'implemented', 'optimized', 'measured'].filter(w => lower.includes(w));
    
    setFeedback({
      wordCount: words,
      starScore: Math.min(100, starMatches.length * 20 + (words > 40 ? 30 : 10)),
      detectedStar: starMatches,
      tip: words < 35 
        ? 'Your answer is brief. State the metric or latency improvement you achieved.'
        : 'Good length! Ensure you mention the technical trade-offs explicitly.'
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all">
      {/* Title & Tag */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              Q{index + 1} • {question.category || 'Viva Discussion'}
            </span>
            {question.verificationType && (
              <VerificationTag
                type={question.verificationType}
                source={question.verifiedSource}
                lastVerified={question.lastVerified}
                compact
              />
            )}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {question.title || question.questionPrompt}
          </h3>
        </div>
      </div>

      {question.hint && (
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic">
          💡 Guide: {question.hint}
        </p>
      )}

      {/* Toggle View */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          {isExpanded ? (
            <>Hide STAR Breakdown & Sample Answer <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>View STAR Breakdown & Practice Answer <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-5 animate-fadeIn">
          {/* STAR Framework Breakdown */}
          {question.starFramework && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                <span className="font-bold text-blue-700 dark:text-blue-300 block mb-0.5">S — Situation</span>
                <p className="text-slate-600 dark:text-slate-300">{question.starFramework.situation}</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40">
                <span className="font-bold text-purple-700 dark:text-purple-300 block mb-0.5">T — Task</span>
                <p className="text-slate-600 dark:text-slate-300">{question.starFramework.task}</p>
              </div>
              <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
                <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-0.5">A — Action</span>
                <p className="text-slate-600 dark:text-slate-300">{question.starFramework.action}</p>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">R — Result</span>
                <p className="text-slate-600 dark:text-slate-300">{question.starFramework.result}</p>
              </div>
            </div>
          )}

          {/* Sample Model Answer */}
          {question.sampleAnswer && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs">
              <p className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                Model Delivery Example:
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{question.sampleAnswer}"
              </p>
            </div>
          )}

          {/* Interactive Answer Sandbox */}
          <div className="space-y-2 pt-2">
            <label className="block text-xs font-bold text-slate-900 dark:text-white">
              Draft Your Answer (AI Pattern Evaluator):
            </label>
            <textarea
              rows={3}
              value={userDraft}
              onChange={(e) => setUserDraft(e.target.value)}
              placeholder="Structure your answer using Situation, Task, Action, and Result..."
              className="w-full p-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {userDraft.trim().split(/\s+/).filter(Boolean).length} words
              </span>
              <button
                type="button"
                onClick={handleAnalyzeDraft}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
              >
                Analyze My Response
              </button>
            </div>

            {feedback && (
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1 mt-2">
                <div className="flex items-center justify-between font-semibold">
                  <span>STAR Alignment Score: {feedback.starScore}%</span>
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {feedback.detectedStar.length} STAR indicators detected
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{feedback.tip}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
