import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Building2, Search, Filter, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANIES_DATA } from '../data/companiesData';
import { CompanyCard } from '../features/companies/CompanyCard';
import { CompanyFilter } from '../features/companies/CompanyFilter';

export const CompanyExplorerPage = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories list
  const categories = useMemo(() => {
    return Array.from(new Set(COMPANIES_DATA.map(c => c.category)));
  }, []);

  // Filtered companies
  const filteredCompanies = useMemo(() => {
    return COMPANIES_DATA.filter((comp) => {
      const matchSearch =
        comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.skillsRequired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        comp.roles.some(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchDifficulty =
        selectedDifficulty === 'all' ||
        comp.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

      const matchCategory =
        selectedCategory === 'all' || comp.category === selectedCategory;

      return matchSearch && matchDifficulty && matchCategory;
    });
  }, [searchQuery, selectedDifficulty, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('all');
    setSelectedCategory('all');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Verified Recruitment Directory
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> 14 Active Top Employers
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Company Interview Explorer
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Select any company to practice their exact interview rounds—from initial online coding rounds to technical viva, project defense, and HR cultural fit.
        </p>
      </div>

      {/* Filter Component */}
      <CompanyFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        onReset={handleResetFilters}
      />

      {/* Company Grid */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 px-1">
          <span>Showing <strong>{filteredCompanies.length}</strong> companies</span>
          {searchQuery && (
            <span>Filtering by query: "<strong>{searchQuery}</strong>"</span>
          )}
        </div>

        {filteredCompanies.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3">
            <Building2 className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">No companies match your filters</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try broadening your search term or reset all filters to view the full directory of 14 hiring companies.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
