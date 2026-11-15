import React, { useState, useRef, useEffect } from 'react';
import { Bell, CheckCheck, Sparkles, Code2, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const dropdownRef = useRef(null);

  const notifications = [
    {
      id: 1,
      title: 'TCS Digital Drive 2026 Announced',
      description: 'Registration opens next week. 12 new verified coding questions added.',
      time: '10m ago',
      icon: Sparkles,
      color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50',
      unread: true,
      link: '/companies/tcs'
    },
    {
      id: 2,
      title: 'Streak Milestones: 7 Days Active! 🔥',
      description: 'You earned the Consistent Achiever badge. Keep it going!',
      time: '2h ago',
      icon: Award,
      color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/50',
      unread: true,
      link: '/analytics'
    },
    {
      id: 3,
      title: 'Mock Interview Scheduled Reminder',
      description: 'Attempt your Infosys Java Developer technical assessment.',
      time: '1d ago',
      icon: Calendar,
      color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/50',
      unread: true,
      link: '/mock-interview'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllRead = () => {
    setUnreadCount(0);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        title="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-900 animate-pulse" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 overflow-hidden animate-fadeIn">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Notifications</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Stay updated on placement drives</p>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-medium"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                Mark all read
              </button>
            )}
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-80 overflow-y-auto">
            {notifications.map((n) => {
              const Icon = n.icon;
              return (
                <Link
                  key={n.id}
                  to={n.link}
                  onClick={() => setIsOpen(false)}
                  className="flex items-start gap-3 p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${n.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">{n.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">{n.description}</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 text-center">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Verified daily from official campus recruitment drives
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
