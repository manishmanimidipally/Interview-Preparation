import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip
} from 'recharts';

export const TopicRadarChart = () => {
  const data = [
    { subject: 'Data Structures', score: 85, fullMark: 100 },
    { subject: 'Core Java & OOP', score: 92, fullMark: 100 },
    { subject: 'SQL & DBMS', score: 78, fullMark: 100 },
    { subject: 'Spring Boot', score: 72, fullMark: 100 },
    { subject: 'Project Defense', score: 80, fullMark: 100 },
    { subject: 'HR & Behavioral', score: 88, fullMark: 100 }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col justify-between">
      <div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Domain Competency Mastery
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Normalized candidate readiness across all 6 core evaluation areas
        </p>
      </div>

      <div className="h-64 w-full my-2">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#334155" opacity={0.2} />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" fontSize={9} />
            <Radar
              name="My Readiness"
              dataKey="score"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.45}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-slate-900 text-white p-2 rounded-xl text-xs border border-slate-800">
                      <p className="font-semibold">{payload[0]?.payload.subject}</p>
                      <p className="text-indigo-400">{payload[0]?.value}% Proficiency</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100 dark:border-slate-800">
        <span className="text-slate-500">Highest: Core Java (92%)</span>
        <span className="text-amber-600 dark:text-amber-400 font-semibold">Priority: Spring Boot (72%)</span>
      </div>
    </div>
  );
};
