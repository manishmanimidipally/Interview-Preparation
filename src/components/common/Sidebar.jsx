import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Code2,
  Layers,
  FolderGit2,
  Bot,
  UserCheck,
  BarChart3,
  BrainCircuit,
  Target,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';

export const Sidebar = ({ isOpen, closeSidebar }) => {
  const { user } = useAuth();
  const { progress } = useProgress();

  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Company Explorer', path: '/companies', icon: Building2, badge: '14 Top MNCs' },
    {
      name: user?.targetCompany ? `${user.targetCompany} Prep` : 'Company Prep',
      path: user?.targetCompany ? `/companies/${user.targetCompany.toLowerCase()}` : '/companies/infosys',
      icon: Target,
      highlight: true
    },
    { name: 'Coding Practice', path: '/coding', icon: Code2, count: progress?.codingProblemsSolved ? `${progress.codingProblemsSolved} Solved` : null },
    { name: 'Technical Round', path: '/technical', icon: Layers },
    { name: 'Project Viva Prep', path: '/projects', icon: FolderGit2, badge: 'STAR' },
    { name: 'AI Mock Interview', path: '/mock-interview', icon: Bot, badge: 'Interactive' },
    { name: 'HR Round Prep', path: '/hr', icon: UserCheck },
    { name: 'Progress & Analytics', path: '/analytics', icon: BarChart3 }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col h-full justify-between">
          <div className="space-y-6">
            {/* Quick Readiness Progress Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/40">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  Readiness Score
                </span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  {progress?.overallReadinessScore || 75}%
                </span>
              </div>
              <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress?.overallReadinessScore || 75}%` }}
                />
              </div>
              <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Targeting: <span className="font-semibold text-slate-700 dark:text-slate-300">{user?.targetCompany || 'Infosys'}</span>
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <p className="px-3 text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-2">
                Preparation Tracks
              </p>
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeSidebar}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                          isActive
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                            : item.highlight
                            ? 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50">
                          {item.count}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Footer note inside sidebar */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500">
            <p className="font-medium text-slate-700 dark:text-slate-400">InterviewPilot AI v1.0</p>
            <p className="mt-0.5">Verified Placement Intel</p>
          </div>
        </div>
      </aside>
    </>
  );
};
