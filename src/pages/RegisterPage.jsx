import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { COMPANIES_DATA } from '../data/companiesData';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetCompany, setTargetCompany] = useState('Infosys');
  const [graduationYear, setGraduationYear] = useState(2025);
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      register({
        name,
        email,
        targetCompany,
        graduationYear,
        experienceLevel: 'Fresh Graduate',
        primaryStack: 'Java, Spring Boot, MySQL'
      });
      setIsLoading(false);
      navigate('/profile-setup');
    }, 400);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Create candidate profile
        </h2>
        <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
          Tailor practice questions to your dream company and graduation year
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Full Name
          </label>
          <div className="relative">
            <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya Sundaram"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            College / Personal Email
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@college.edu or gmail"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Password
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Primary Target
            </label>
            <select
              value={targetCompany}
              onChange={(e) => setTargetCompany(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
            >
              {COMPANIES_DATA.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Graduation Year
            </label>
            <select
              value={graduationYear}
              onChange={(e) => setGraduationYear(Number(e.target.value))}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
            >
              <option value={2024}>2024 (Immediate)</option>
              <option value={2025}>2025 (Final Year)</option>
              <option value={2026}>2026 (Pre-Final)</option>
              <option value={2027}>2027</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
        >
          <span>{isLoading ? 'Creating Account...' : 'Continue to Profile Setup'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
        Already have an account?{' '}
        <Link to="/login" className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};
