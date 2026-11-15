import React, { useState, useEffect } from 'react';
import {
  Play,
  Send,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  Cpu,
  Bookmark,
  Share2,
  ChevronDown,
  Terminal,
  FileCode,
  History,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CODE_TEMPLATES, simulateCodeExecution } from '../../utils/codeTemplates';
import { VerificationTag } from '../../components/common/VerificationTag';
import { Badge } from '../../components/common/Badge';
import { useBookmarks } from '../../context/BookmarkContext';
import { useProgress } from '../../context/ProgressContext';

export const CodeEditor = ({ question }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const [code, setCode] = useState('');
  const [activeTab, setActiveTab] = useState('testcases'); // 'testcases' | 'result' | 'history' | 'solution'
  const [selectedTestCaseIdx, setSelectedTestCaseIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [submissionHistory, setSubmissionHistory] = useState([
    {
      id: 'sub-sample-1',
      submittedAt: 'Yesterday',
      language: 'java',
      status: 'Accepted',
      runtime: '14 ms',
      memory: '23.4 MB'
    }
  ]);

  const { isQuestionBookmarked, toggleQuestionBookmark } = useBookmarks();
  const { recordSolvedQuestion, isQuestionSolved } = useProgress();

  const isBookmarked = isQuestionBookmarked(question.id);
  const isSolved = isQuestionSolved(question.id);

  // Initialize or reset starter code when language changes
  useEffect(() => {
    const starter = question.starterCode?.[selectedLanguage] || CODE_TEMPLATES[selectedLanguage]();
    setCode(starter);
    setExecutionResult(null);
  }, [selectedLanguage, question]);

  const handleReset = () => {
    const starter = question.starterCode?.[selectedLanguage] || CODE_TEMPLATES[selectedLanguage]();
    setCode(starter);
    setExecutionResult(null);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setActiveTab('result');
    const result = await simulateCodeExecution(code, selectedLanguage, question.testCases, false);
    setExecutionResult(result);
    setIsRunning(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setActiveTab('result');
    const result = await simulateCodeExecution(code, selectedLanguage, question.testCases, true);
    setExecutionResult(result);
    setIsSubmitting(false);

    if (result.status === 'Accepted') {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      recordSolvedQuestion(question.id, question.title, 'coding', question.companyTags[0] || 'General');

      setSubmissionHistory(prev => [
        {
          id: 'sub-' + Date.now(),
          submittedAt: 'Just now',
          language: selectedLanguage,
          status: 'Accepted',
          runtime: `${result.executionTime} ms`,
          memory: result.memoryUsed
        },
        ...prev
      ]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column: Problem Description & Details */}
      <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft space-y-6 max-h-[85vh] overflow-y-auto">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <Badge variant={question.difficulty} size="sm">
                {question.difficulty}
              </Badge>
              {isSolved && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Solved
                </span>
              )}
            </div>

            <button
              onClick={() => toggleQuestionBookmark(question.id)}
              className={`p-1.5 rounded-xl transition-colors ${
                isBookmarked
                  ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950 dark:text-indigo-400'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark question'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {question.title}
          </h1>

          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <VerificationTag
              type={question.verificationType}
              source={question.verifiedSource}
              lastVerified={question.lastVerified}
            />
          </div>
        </div>

        {/* Company Tags */}
        <div>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Reported in Placement Drives
          </p>
          <div className="flex flex-wrap gap-1.5">
            {question.companyTags?.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-lg font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Problem Statement */}
        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
          <p className="whitespace-pre-line">{question.description}</p>

          {/* Examples */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2 text-xs font-mono">
            <p className="font-semibold text-slate-900 dark:text-white font-sans text-xs">Example:</p>
            <p><span className="text-slate-500">Input: </span>{question.inputFormat}</p>
            <p><span className="text-slate-500">Output: </span>{question.outputFormat}</p>
            {question.explanation && (
              <p className="font-sans text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-700/60">
                <span className="font-semibold">Explanation: </span>{question.explanation}
              </p>
            )}
          </div>

          {/* Constraints */}
          {question.constraints && question.constraints.length > 0 && (
            <div className="pt-2">
              <p className="font-semibold text-xs text-slate-900 dark:text-white mb-2">Constraints:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 dark:text-slate-400 font-mono">
                {question.constraints.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Code Editor & Execution Panel */}
      <div className="lg:col-span-7 space-y-4">
        {/* Editor Box */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-indigo-400" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-slate-800 text-xs font-semibold text-white px-3 py-1.5 rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="java">Java (OpenJDK 17)</option>
                <option value="python">Python 3.11</option>
                <option value="cpp">C++ (G++ 14)</option>
                <option value="javascript">JavaScript (Node 20)</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Reset code template"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Code Text Area */}
          <div className="relative font-mono text-xs sm:text-sm bg-slate-950 p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={16}
              spellCheck={false}
              className="w-full bg-transparent text-emerald-400 font-mono resize-y focus:outline-none leading-relaxed selection:bg-indigo-600"
            />
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>Simulated Sandbox Environment</span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleRun}
                disabled={isRunning || isSubmitting}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                {isRunning ? 'Running...' : 'Run Code'}
              </button>

              <button
                onClick={handleSubmit}
                disabled={isRunning || isSubmitting}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 disabled:opacity-50 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                {isSubmitting ? 'Evaluating...' : 'Submit Code'}
              </button>
            </div>
          </div>
        </div>

        {/* Results & Test Cases Tabs Panel */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-soft overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex items-center border-b border-slate-200 dark:border-slate-800 px-4 pt-2 gap-4">
            <button
              onClick={() => setActiveTab('testcases')}
              className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === 'testcases'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Test Cases ({question.testCases?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('result')}
              className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === 'result'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Execution Output {executionResult && `(${executionResult.status})`}
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === 'history'
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Submissions ({submissionHistory.length})
            </button>
            {question.solution && (
              <button
                onClick={() => setActiveTab('solution')}
                className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors ${
                  activeTab === 'solution'
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                Model Solution
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-5">
            {activeTab === 'testcases' && (
              <div className="space-y-4">
                <div className="flex gap-2">
                  {question.testCases?.map((tc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTestCaseIdx(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedTestCaseIdx === idx
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      Case {idx + 1} {tc.hidden && '(Hidden)'}
                    </button>
                  ))}
                </div>

                {question.testCases?.[selectedTestCaseIdx] && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 font-mono text-xs space-y-2">
                    <div>
                      <span className="text-slate-400">Input: </span>
                      <p className="text-slate-900 dark:text-white font-semibold mt-0.5">
                        {question.testCases[selectedTestCaseIdx].input}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-400">Expected Output: </span>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                        {question.testCases[selectedTestCaseIdx].expectedOutput}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'result' && (
              <div>
                {!executionResult ? (
                  <div className="text-center py-8 text-xs text-slate-400">
                    Click "Run Code" or "Submit Code" to view execution results.
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {executionResult.passed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-500" />
                        )}
                        <h4 className={`text-base font-bold ${executionResult.passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                          {executionResult.status}
                        </h4>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {executionResult.executionTime} ms
                        </span>
                        <span className="flex items-center gap-1">
                          <Cpu className="w-3.5 h-3.5" /> {executionResult.memoryUsed}
                        </span>
                      </div>
                    </div>

                    {executionResult.error && (
                      <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs font-mono text-rose-600 dark:text-rose-400">
                        {executionResult.error}
                      </div>
                    )}

                    {executionResult.results && executionResult.results.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Test Case Verification Breakdown:
                        </p>
                        {executionResult.results.map((r) => (
                          <div
                            key={r.id}
                            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-mono"
                          >
                            <span className="text-slate-700 dark:text-slate-300">
                              Test Case #{r.id}
                            </span>
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Passed ({r.timeMs}ms)
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-2">
                {submissionHistory.map((sub) => (
                  <div
                    key={sub.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {sub.status}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="uppercase text-[10px] font-semibold text-slate-500">
                        {sub.language}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-500">
                      <span>{sub.runtime}</span>
                      <span>{sub.memory}</span>
                      <span className="text-slate-400">{sub.submittedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'solution' && question.solution && (
              <div className="space-y-3 text-xs leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Optimal Approach:
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {question.solution.approach}
                </p>
                <div className="p-3 rounded-2xl bg-slate-950 text-emerald-400 font-mono text-xs overflow-x-auto">
                  <pre>{question.solution.javaCode}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
