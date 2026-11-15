import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Building2, Briefcase, GraduationCap, Code2, Save, ArrowRight, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { COMPANIES_DATA } from '../data/companiesData';

export const ProfileSetupPage = () => {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    targetCompany: user?.targetCompany || 'Infosys',
    targetRole: user?.targetRole || 'Java Developer',
    graduationYear: user?.graduationYear || 2025,
    primaryStack: user?.primaryStack || 'Java, Spring Boot, MySQL',
    experienceLevel: user?.experienceLevel || 'Fresh Graduate',
    college: user?.college || 'Institute of Technology'
  });

  const [savedMessage, setSavedMessage] = useState(false);

  const selectedCompanyObj = COMPANIES_DATA.find(
    c => c.name.toLowerCase() === formData.targetCompany.toLowerCase() || c.id === formData.targetCompany.toLowerCase()
  ) || COMPANIES_DATA[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanyChange = (e) => {
    const compName = e.target.value;
    const compObj = COMPANIES_DATA.find(c => c.name === compName) || COMPANIES_DATA[0];
    setFormData(prev => ({
      ...prev,
      targetCompany: compName,
      targetRole: compObj.roles[0]?.title || 'Software Engineer'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setSavedMessage(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Student Profile Setup
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Personalize your curriculum, mock evaluations, and company readiness metrics
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-5 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <User className="w-4 h-4 text-indigo-500" />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-indigo-500" />
                Target Company
              </label>
              <select
                name="targetCompany"
                value={formData.targetCompany}
                onChange={handleCompanyChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              >
                {COMPANIES_DATA.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-indigo-500" />
                Target Job Role
              </label>
              <select
                name="targetRole"
                value={formData.targetRole}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              >
                {selectedCompanyObj.roles.map((r) => (
                  <option key={r.id} value={r.title}>
                    {r.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                Graduation Year
              </label>
              <select
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              >
                <option value={2024}>Class of 2024 (Batch Alumni)</option>
                <option value={2025}>Class of 2025 (Graduating This Year)</option>
                <option value={2026}>Class of 2026 (Pre-final Year)</option>
                <option value={2027}>Class of 2027</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                Experience Bracket
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              >
                <option value="Fresh Graduate">Fresh Graduate (0 years)</option>
                <option value="Internship Experienced">Internship Experienced (3-6 mos)</option>
                <option value="Junior Engineer">Junior Engineer (1-2 years)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-500" />
              Primary Tech Stack & Languages
            </label>
            <input
              type="text"
              name="primaryStack"
              value={formData.primaryStack}
              onChange={handleChange}
              placeholder="e.g. Java, Spring Boot, MySQL, REST, Python"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              College / University Name
            </label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="e.g. SRM Institute of Science and Technology"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600"
            >
              Skip for now
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
            >
              {savedMessage ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Profile Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Profile & Go to Dashboard</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
