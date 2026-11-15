import React, { useState, useEffect } from 'react';
import {
  Clock,
  ArrowRight,
  StopCircle,
  Sparkles,
  Bot,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Send
} from 'lucide-react';
import { evaluateInterviewResponse } from '../../utils/evaluationEngine';

export const InterviewSession = ({ session, onComplete, onCancel }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [recordedResponses, setRecordedResponses] = useState([]);
  const [timeLeft, setTimeLeft] = useState(session.durationPerQuestion || 120);
  const [isFinishing, setIsFinishing] = useState(false);

  const currentQuestion = session.questions[currentIdx];
  const isLastQuestion = currentIdx === session.questions.length - 1;

  // Real-time countdown timer
  useEffect(() => {
    setTimeLeft(session.durationPerQuestion || 120);
  }, [currentIdx, session.durationPerQuestion]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleNext = () => {
    // Evaluate answer on the fly
    const evalResult = evaluateInterviewResponse(currentQuestion, userAnswer, session.round);

    const responseEntry = {
      question: currentQuestion,
      userAnswer: userAnswer || '(No answer recorded within time limit)',
      evaluation: evalResult
    };

    const updated = [...recordedResponses, responseEntry];
    setRecordedResponses(updated);
    setUserAnswer('');

    if (isLastQuestion) {
      setIsFinishing(true);
      setTimeout(() => {
        onComplete({
          company: session.company,
          role: session.role,
          round: session.round,
          responses: updated
        });
      }, 500);
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const handleEndEarly = () => {
    if (window.confirm('Are you sure you want to conclude the mock interview now?')) {
      const evalResult = evaluateInterviewResponse(currentQuestion, userAnswer, session.round);
      const updated = [
        ...recordedResponses,
        {
          question: currentQuestion,
          userAnswer: userAnswer || '(Ended session early)',
          evaluation: evalResult
        }
      ];
      onComplete({
        company: session.company,
        role: session.role,
        round: session.round,
        responses: updated
      });
    }
  };

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const timerColor = timeLeft < 30 ? 'text-rose-500 animate-pulse' : 'text-indigo-600 dark:text-indigo-400';

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Session Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-soft flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
            Live AI Mock Interview
          </span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            {session.company} • {session.role}
          </h2>
          <span className="text-xs text-slate-400">{session.round}</span>
        </div>

        {/* Timer display */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-2xl font-mono text-sm font-bold">
            <Clock className={`w-4 h-4 ${timerColor}`} />
            <span className={timerColor}>{formatTimer(timeLeft)}</span>
          </div>

          <button
            onClick={handleEndEarly}
            className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-colors"
            title="End Interview"
          >
            <StopCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold px-3 py-1 rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            Question {currentIdx + 1} of {session.questions.length}
          </span>
          <span className="text-xs text-slate-400">
            {Math.round(((currentIdx + 1) / session.questions.length) * 100)}% Completed
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-full transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / session.questions.length) * 100}%` }}
          />
        </div>

        {/* Question Prompt */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
            Interviewer Asks:
          </p>
          <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
            "{currentQuestion.text}"
          </p>
        </div>

        {/* Text Answer Input Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <label className="font-semibold text-slate-700 dark:text-slate-300">
              Your Response (Speak or type your answer):
            </label>
            <span className="text-slate-400">
              {userAnswer.trim().split(/\s+/).filter(Boolean).length} words
            </span>
          </div>

          <textarea
            rows={7}
            autoFocus
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Structure your verbal thoughts. Mention design decisions, trade-offs, and practical examples..."
            className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 text-xs sm:text-sm leading-relaxed"
          />
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleEndEarly}
            className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            End Early
          </button>

          <button
            onClick={handleNext}
            disabled={isFinishing}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
          >
            <span>{isLastQuestion ? 'Submit & Generate Scorecard' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
