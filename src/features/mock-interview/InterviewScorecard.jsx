import React, { useEffect } from 'react';
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Download,
  Share2,
  Sparkles,
  TrendingUp,
  FileText,
  ChevronDown,
  Building2,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useProgress } from '../../context/ProgressContext';

export const InterviewScorecard = ({ report, onRetake, onExit }) => {
  const { recordMockInterview } = useProgress();

  useEffect(() => {
    // Record into global context and history
    if (report) {
      recordMockInterview(report);
      if (report.overallScore >= 70) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const getVerdictBadge = (verdict) => {
    if (verdict.includes('Strong Hire')) {
      return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
    }
    if (verdict.includes('Hire with Polish')) {
      return 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800';
    }
    return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 print:m-0 print:p-0">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Official AI Performance Scorecard
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-xs text-slate-400">
                {new Date(report.completedAt).toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {report.company} — {report.role}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Round: <span className="font-semibold text-slate-700 dark:text-slate-300">{report.round}</span> ({report.totalQuestions} Questions Evaluated)
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getVerdictBadge(report.verdict)}`}>
              {report.verdict}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white">
                {report.overallScore}
              </span>
              <span className="text-sm font-bold text-slate-400">/100</span>
            </div>
          </div>
        </div>

        {/* 4 Metric Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Technical Accuracy</span>
            <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-1">
              {report.technicalAccuracy}%
            </p>
            <span className="text-[10px] text-slate-400">Syllabus keywords</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Answer Clarity</span>
            <p className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
              {report.clarity}%
            </p>
            <span className="text-[10px] text-slate-400">Structure & flow</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Communication</span>
            <p className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-1">
              {report.communication}%
            </p>
            <span className="text-[10px] text-slate-400">Professional phrasing</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
            <span className="text-[11px] font-semibold text-slate-400 uppercase">Observable Confidence</span>
            <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
              {report.confidenceScore}%
            </p>
            <span className="text-[10px] text-slate-400">Linguistic certainty</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 print:hidden">
          <button
            onClick={onRetake}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Retake Another Mock
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download / Print Report
            </button>
            <button
              onClick={onExit}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 transition-all"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Question by Question Breakdown */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white px-1">
          Detailed Question-by-Question Analysis
        </h3>

        {report.questionBreakdown?.map((q, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  Question #{q.questionIndex}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  "{q.questionText}"
                </h4>
              </div>
              <div className="text-right shrink-0">
                <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">
                  {q.score}
                </span>
                <span className="text-xs text-slate-400">/100</span>
              </div>
            </div>

            {/* Candidate Response */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                Your Answer:
              </span>
              <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">
                "{q.userAnswer}"
              </p>
            </div>

            {/* Strengths & Improvements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {q.strengths && q.strengths.length > 0 && (
                <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                  <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
                    ✓ Strong Observations:
                  </span>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    {q.strengths.map((s, sIdx) => (
                      <li key={sIdx}>• {s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {q.improvements && q.improvements.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40">
                  <span className="font-bold text-amber-700 dark:text-amber-300 block mb-1">
                    ⚠ How to Improve:
                  </span>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    {q.improvements.map((imp, iIdx) => (
                      <li key={iIdx}>• {imp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Model Answer Guidance */}
            {q.suggestedRewrite && (
              <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 text-xs">
                <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
                  Recommended Model Delivery:
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{q.suggestedRewrite}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
