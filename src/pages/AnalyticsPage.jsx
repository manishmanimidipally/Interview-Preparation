import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Target,
  Award,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Flame,
  Code2,
  Layers,
  Bot,
  UserCheck,
  RefreshCcw
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { WeeklyChart } from '../features/analytics/WeeklyChart';
import { TopicRadarChart } from '../features/analytics/TopicRadarChart';
import { WeakTopicsAlert } from '../features/analytics/WeakTopicsAlert';
import { MetricCard } from '../components/common/MetricCard';

export const AnalyticsPage = () => {
  const { progress, resetAllProgress } = useProgress();
  const { user } = useAuth();

  const handleReset = () => {
    if (window.confirm('Reset all saved question progress and mock interview stats?')) {
      resetAllProgress();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Diagnostic Placement Analytics
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs text-slate-400">Class of {user?.graduationYear || 2025}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Performance & Readiness Dashboard
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Real-time tracking across algorithmic tests, viva rounds, and mock interview percentiles
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 border border-slate-200 dark:border-slate-800 transition-colors"
        >
          <RefreshCcw className="w-3.5 h-3.5" />
          <span>Reset Practice Stats</span>
        </button>
      </div>

      {/* 4 Performance Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Overall Readiness"
          value={`${progress?.overallReadinessScore || 78}%`}
          subtitle="Target threshold: 80%"
          icon={Target}
          color="indigo"
          badgeText="Interview Ready"
        />
        <MetricCard
          title="Coding Pass Rate"
          value="92.4%"
          subtitle="Test case executions"
          icon={Code2}
          color="emerald"
          trend={6}
        />
        <MetricCard
          title="Mock Score Average"
          value="81 / 100"
          subtitle="Evaluated across 6 mocks"
          icon={Bot}
          color="blue"
          trend={12}
        />
        <MetricCard
          title="Active Streak"
          value={`${progress?.learningStreakDays || 7} Days`}
          subtitle="Target: 14 days"
          icon={Flame}
          color="amber"
          badgeText="Consistent 🔥"
        />
      </div>

      {/* Visual Analytics Grid: Recharts Bar + Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <WeeklyChart />
        </div>
        <div className="lg:col-span-5">
          <TopicRadarChart />
        </div>
      </div>

      {/* Category Breakdown Bars */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft space-y-6">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Preparation Progress by Interview Stage
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Coding */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between font-semibold">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Code2 className="w-4 h-4 text-indigo-500" />
                Coding Round
              </span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">85% Complete</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full rounded-full" style={{ width: '85%' }} />
            </div>
            <p className="text-[11px] text-slate-400">19 of 24 problems solved</p>
          </div>

          {/* Technical */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between font-semibold">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Layers className="w-4 h-4 text-blue-500" />
                Technical Viva
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">78% Complete</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: '78%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Core Java & Spring Boot revised</p>
          </div>

          {/* Projects */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between font-semibold">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Target className="w-4 h-4 text-purple-500" />
                Project Defense
              </span>
              <span className="text-purple-600 dark:text-purple-400 font-bold">80% Complete</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-purple-600 h-full rounded-full" style={{ width: '80%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Architecture & STAR prepared</p>
          </div>

          {/* HR */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between font-semibold">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <UserCheck className="w-4 h-4 text-emerald-500" />
                HR Round
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">90% Complete</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: '90%' }} />
            </div>
            <p className="text-[11px] text-slate-400">Zero filler word baseline</p>
          </div>
        </div>
      </div>

      {/* Weak Topics Diagnostic Alert */}
      <WeakTopicsAlert />

      {/* Recommended Next Actions */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-slate-900 rounded-3xl p-6 sm:p-8 border border-indigo-100 dark:border-indigo-900/40">
        <h3 className="text-base font-bold text-indigo-950 dark:text-indigo-200 mb-3">
          AI Recommended Action Plan for {user?.name || 'Candidate'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="font-bold text-indigo-600 dark:text-indigo-400">Priority 1 (Today)</span>
            <p className="font-semibold text-slate-900 dark:text-white">
              Solve 2 Rotated Sorted Array & Two Sum problems
            </p>
            <Link to="/coding" className="inline-flex items-center gap-1 text-indigo-600 font-bold">
              Practice Coding →
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="font-bold text-blue-600 dark:text-blue-400">Priority 2 (Tomorrow)</span>
            <p className="font-semibold text-slate-900 dark:text-white">
              Revise Multithreading (synchronized vs volatile)
            </p>
            <Link to="/technical" className="inline-flex items-center gap-1 text-blue-600 font-bold">
              Revise Viva →
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">Priority 3 (This Weekend)</span>
            <p className="font-semibold text-slate-900 dark:text-white">
              Take full 3-question {user?.targetCompany || 'Infosys'} Mock Interview
            </p>
            <Link to="/mock-interview" className="inline-flex items-center gap-1 text-emerald-600 font-bold">
              Start Mock →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
