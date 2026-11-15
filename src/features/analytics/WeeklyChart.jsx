import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

export const WeeklyChart = () => {
  const data = [
    { day: 'Mon', coding: 4, technical: 3, hr: 2 },
    { day: 'Tue', coding: 6, technical: 5, hr: 1 },
    { day: 'Wed', coding: 3, technical: 4, hr: 3 },
    { day: 'Thu', coding: 7, technical: 6, hr: 2 },
    { day: 'Fri', coding: 5, technical: 5, hr: 4 },
    { day: 'Sat', coding: 8, technical: 7, hr: 5 },
    { day: 'Sun', coding: 4, technical: 3, hr: 2 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white p-3 rounded-xl shadow-xl text-xs border border-slate-800">
          <p className="font-bold mb-1">{label} Activity</p>
          <p className="text-indigo-400">Coding: {payload[0]?.value} problems</p>
          <p className="text-blue-400">Technical: {payload[1]?.value} questions</p>
          <p className="text-emerald-400">HR Practice: {payload[2]?.value} answers</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Weekly Practice Volume
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Number of problems & viva questions completed per day
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Target: 25 / week
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
            <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="coding" fill="#6366f1" radius={[4, 4, 0, 0]} name="Coding" />
            <Bar dataKey="technical" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Technical" />
            <Bar dataKey="hr" fill="#10b981" radius={[4, 4, 0, 0]} name="HR" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-500" />
          <span className="text-slate-600 dark:text-slate-400">Coding Practice</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-slate-600 dark:text-slate-400">Technical Viva</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-slate-600 dark:text-slate-400">HR Prep</span>
        </div>
      </div>
    </div>
  );
};
