import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  CheckCircle2,
  Bot,
  Flame,
  TrendingUp,
  Building2,
  Calendar,
  ArrowRight,
  Clock,
  Sparkles,
  Target,
  Bookmark,
  Layers,
  FolderGit2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { useBookmarks } from '../context/BookmarkContext';
import { MetricCard } from '../components/common/MetricCard';
import { COMPANIES_DATA } from '../data/companiesData';
import { WeeklyChart } from '../features/analytics/WeeklyChart';
import { WeakTopicsAlert } from '../features/analytics/WeakTopicsAlert';

export const DashboardPage = () => {
  const { user } = useAuth();
  const { progress } = useProgress();
  const { bookmarks } = useBookmarks();

  const targetComp = COMPANIES_DATA.find(
    c => c.name.toLowerCase() === (user?.targetCompany || 'infosys').toLowerCase() || c.id === (user?.targetCompany || 'infosys').toLowerCase()
  ) || COMPANIES_DATA[0];

  const bookmarkedCompanyList = COMPANIES_DATA.filter(c => bookmarks.companies.includes(c.id));

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-indigo-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Targeting: {user?.targetCompany || 'Infosys'} • {user?.targetRole || 'Java Developer'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, {user?.name || 'Candidate'}!
            </h1>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              You are currently on a <strong>{progress?.learningStreakDays || 7}-day preparation streak</strong>. Keep up the momentum to secure your placement offer.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to={`/companies/${targetComp.slug}`}
              className="px-5 py-2.5 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Target className="w-4 h-4 text-indigo-600" />
              <span>Continue {targetComp.name.split(' ')[0]} Track</span>
            </Link>
            <Link
              to="/mock-interview"
              className="px-5 py-2.5 rounded-xl bg-indigo-500/30 border border-white/20 hover:bg-indigo-500/40 text-white font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4" />
              <span>Take Mock</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 5 Core Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard
          title="Questions Practiced"
          value={progress?.totalQuestionsPracticed || 48}
          subtitle="Across all rounds"
          icon={CheckCircle2}
          color="indigo"
          trend={14}
        />
        <MetricCard
          title="Coding Problems"
          value={progress?.codingProblemsSolved || 19}
          subtitle="Test cases passed"
          icon={Code2}
          color="blue"
          trend={8}
        />
        <MetricCard
          title="Mock Interviews"
          value={progress?.mockInterviewsCompleted || 6}
          subtitle="AI evaluations"
          icon={Bot}
          color="purple"
          trend={20}
        />
        <MetricCard
          title="Readiness Index"
          value={`${progress?.overallReadinessScore || 78}%`}
          subtitle="Placement probability"
          icon={TrendingUp}
          color="emerald"
          badgeText="High Fit"
        />
        <MetricCard
          title="Current Streak"
          value={`${progress?.learningStreakDays || 7} Days`}
          subtitle="Keep daily rhythm"
          icon={Flame}
          color="amber"
          badgeText="Active 🔥"
        />
      </div>

      {/* Main Charts & Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Weekly Practice Chart & Weak Topics */}
        <div className="lg:col-span-8 space-y-6">
          <WeeklyChart />
          <WeakTopicsAlert />

          {/* Bookmarked Companies Section */}
          <div id="bookmarks" className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-indigo-600 dark:text-indigo-400 fill-current" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Favorite Bookmarked Companies ({bookmarkedCompanyList.length})
                </h3>
              </div>
              <Link to="/companies" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                Explore More
              </Link>
            </div>

            {bookmarkedCompanyList.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">
                No bookmarked companies yet. Bookmark companies from the Explorer to track them here.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {bookmarkedCompanyList.map((c) => (
                  <Link
                    key={c.id}
                    to={`/companies/${c.slug}`}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-500 transition-all flex items-center gap-3"
                  >
                    <div
                      className="w-10 h-10 rounded-xl text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: c.accentColor }}
                    >
                      {c.logoText}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {c.name}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {c.roles.length} Roles • {c.difficulty}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Upcoming Tasks & Recent Activity */}
        <div className="lg:col-span-4 space-y-6">
          {/* Upcoming Tasks */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-500" />
                Upcoming Tasks
              </h3>
              <span className="text-[11px] font-semibold text-slate-400">
                {progress?.upcomingTasks?.length || 3} Pending
              </span>
            </div>

            <div className="space-y-3">
              {progress?.upcomingTasks?.map((task) => (
                <div
                  key={task.id}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {task.title}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${task.priority === 'High' ? 'bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400' : 'bg-slate-100 dark:bg-slate-700 text-slate-600'}`}>
                      {task.priority}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{task.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {task.deadline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-500" />
              Recent Practice Activity
            </h3>

            <div className="space-y-3.5">
              {progress?.recentActivity?.slice(0, 5).map((act) => (
                <div key={act.id} className="flex items-start gap-3 text-xs">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {act.title}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">{act.company}</span>
                      <span>•</span>
                      <span>{act.result}</span>
                      <span>•</span>
                      <span>{act.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Track Switcher */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/40 space-y-3">
            <h4 className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
              Quick Shortcuts
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                to="/coding"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors flex items-center gap-2 shadow-sm"
              >
                <Code2 className="w-3.5 h-3.5 text-indigo-500" /> Coding
              </Link>
              <Link
                to="/technical"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors flex items-center gap-2 shadow-sm"
              >
                <Layers className="w-3.5 h-3.5 text-blue-500" /> Core Java
              </Link>
              <Link
                to="/projects"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors flex items-center gap-2 shadow-sm"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-purple-500" /> Viva Prep
              </Link>
              <Link
                to="/mock-interview"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors flex items-center gap-2 shadow-sm"
              >
                <Bot className="w-3.5 h-3.5 text-emerald-500" /> AI Mock
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
