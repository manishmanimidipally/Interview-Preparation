import React, { useState } from 'react';
import { Bot, Sparkles, History, CheckCircle2, ArrowRight } from 'lucide-react';
import { mockInterviewService } from '../../src/services/mockInterviewService';
import { InterviewSetup } from '../features/mock-interview/InterviewSetup';
import { InterviewSession } from '../features/mock-interview/InterviewSession';
import { InterviewScorecard } from '../features/mock-interview/InterviewScorecard';
import { useProgress } from '../context/ProgressContext';

export const MockInterviewPage = () => {
  const [phase, setPhase] = useState('setup'); // 'setup' | 'session' | 'scorecard'
  const [currentSession, setCurrentSession] = useState(null);
  const [finalReport, setFinalReport] = useState(null);

  const { mockHistory } = useProgress();

  const handleStartInterview = (config) => {
    const session = mockInterviewService.generateInterviewSession(
      config.company,
      config.role,
      config.round,
      config.questionCount
    );
    session.durationPerQuestion = config.durationPerQuestion;
    setCurrentSession(session);
    setPhase('session');
  };

  const handleCompleteSession = (sessionData) => {
    const report = mockInterviewService.finalizeReport(sessionData);
    setFinalReport(report);
    setPhase('scorecard');
  };

  const handleRetake = () => {
    setPhase('setup');
    setCurrentSession(null);
    setFinalReport(null);
  };

  return (
    <div className="space-y-8">
      {phase === 'setup' && (
        <div className="space-y-8">
          <InterviewSetup onStartInterview={handleStartInterview} />

          {/* Past Mock History */}
          {mockHistory.length > 0 && (
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <History className="w-4 h-4 text-indigo-500" />
                Previous Mock Interview History ({mockHistory.length})
              </h3>
              <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {mockHistory.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">
                        {item.company} • {item.role}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {item.round} • {new Date(item.completedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-indigo-600 dark:text-indigo-400 text-sm">
                        {item.overallScore}/100
                      </span>
                      <p className="text-[10px] text-slate-400 font-medium">{item.verdict}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {phase === 'session' && currentSession && (
        <InterviewSession
          session={currentSession}
          onComplete={handleCompleteSession}
          onCancel={() => setPhase('setup')}
        />
      )}

      {phase === 'scorecard' && finalReport && (
        <InterviewScorecard
          report={finalReport}
          onRetake={handleRetake}
          onExit={() => setPhase('setup')}
        />
      )}
    </div>
  );
};
