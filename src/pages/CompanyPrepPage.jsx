import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Building2,
  Code2,
  Layers,
  FolderGit2,
  UserCheck,
  Bot,
  Briefcase,
  Bookmark,
  Share2,
  ChevronRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Download,
  BookOpen
} from 'lucide-react';
import { COMPANIES_DATA } from '../data/companiesData';
import { CODING_QUESTIONS } from '../data/codingQuestionsData';
import { TECHNICAL_QUESTIONS } from '../data/technicalQuestionsData';
import { STANDARD_PROJECT_QUESTIONS } from '../data/projectQuestionsData';
import { HR_QUESTIONS } from '../data/hrQuestionsData';
import { TechnicalCard } from '../features/technical/TechnicalCard';
import { ProjectQuestionCard } from '../features/projects/ProjectQuestionCard';
import { HrQuestionCard } from '../features/hr/HrQuestionCard';
import { VerificationTag } from '../components/common/VerificationTag';
import { Badge } from '../components/common/Badge';
import { useBookmarks } from '../context/BookmarkContext';

export const CompanyPrepPage = () => {
  const { companySlug = 'infosys' } = useParams();
  const [activeTab, setActiveTab] = useState('coding'); // 'coding' | 'technical' | 'project' | 'hr'
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedRole, setSelectedRole] = useState(null);

  const { isCompanyBookmarked, toggleCompanyBookmark } = useBookmarks();

  const company = COMPANIES_DATA.find(
    c => c.slug.toLowerCase() === companySlug.toLowerCase() || c.id.toLowerCase() === companySlug.toLowerCase()
  ) || COMPANIES_DATA[0];

  const isBookmarked = isCompanyBookmarked(company.id);

  // Set default role when company changes
  useEffect(() => {
    if (company && company.roles.length > 0) {
      setSelectedRole(company.roles[0]);
    }
    setSelectedTopic('all');
  }, [companySlug]);

  // Coding topics filter list as requested in prompt:
  // Arrays, Strings, Searching and Sorting, Linked Lists, Stack and Queue, Trees, Dynamic Programming, Java programming challenges
  const codingTopics = [
    'all',
    'Arrays',
    'Strings',
    'Searching and Sorting',
    'Linked Lists',
    'Stack and Queue',
    'Trees',
    'Dynamic Programming',
    'Java programming challenges'
  ];

  // Technical topics filter list as requested in prompt:
  // Core Java, OOP concepts, Collections, Exception Handling, Multithreading, Java 8 features, SQL, DBMS, Spring Boot, Hibernate, REST APIs
  const technicalTopics = [
    'all',
    'Core Java',
    'OOP concepts',
    'Collections',
    'Exception Handling',
    'Multithreading',
    'Java 8 features',
    'SQL',
    'DBMS',
    'Spring Boot',
    'Hibernate',
    'REST APIs'
  ];

  // Filter coding questions
  const filteredCodingQuestions = CODING_QUESTIONS.filter((q) => {
    const matchCompany = q.companyTags.some(tag => tag.toLowerCase() === company.name.toLowerCase() || company.name.toLowerCase().includes(tag.toLowerCase()));
    const matchTopic = selectedTopic === 'all' || q.topic.toLowerCase() === selectedTopic.toLowerCase();
    return matchTopic; // Show all relevant or company tagged
  });

  // Filter technical questions
  const filteredTechQuestions = TECHNICAL_QUESTIONS.filter((q) => {
    const matchTopic = selectedTopic === 'all' || q.topic.toLowerCase() === selectedTopic.toLowerCase();
    return matchTopic;
  });

  return (
    <div className="space-y-8">
      {/* Company Header Hero */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div
              className="w-16 h-16 rounded-2xl text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md"
              style={{ backgroundColor: company.accentColor }}
            >
              {company.logoText}
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {company.name}
                </h1>
                <Badge variant={company.difficulty} size="sm">
                  {company.difficulty} Difficulty
                </Badge>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {company.category} • Hiring via {company.hiringTypes?.join(', ') || 'Campus & Off-Campus'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => toggleCompanyBookmark(company.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isBookmarked
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>{isBookmarked ? 'Bookmarked' : 'Save Company'}</span>
            </button>

            <Link
              to="/mock-interview"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/25 transition-all"
            >
              <Bot className="w-4 h-4" />
              <span>Launch Mock Interview</span>
            </Link>
          </div>
        </div>

        {/* Available Job Roles Selector */}
        <div className="mt-6">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Select Job Role Track:
          </p>
          <div className="flex flex-wrap gap-2">
            {company.roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRole(r)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedRole?.id === r.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {r.title} ({r.package})
              </button>
            ))}
          </div>
        </div>

        {/* Company Rounds Roadmap */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
            Hiring Process Stages:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {company.interviewRounds.map((rnd) => (
              <div
                key={rnd.roundNumber}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>Round {rnd.roundNumber}: {rnd.title}</span>
                  <span className="text-[10px] text-slate-400 font-normal">{rnd.duration}</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                  {rnd.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Preparation Tracks Tab Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-soft overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-slate-200 dark:border-slate-800">
          {[
            { id: 'coding', label: '1. Coding Round', icon: Code2, count: filteredCodingQuestions.length },
            { id: 'technical', label: '2. Technical Round', icon: Layers, count: filteredTechQuestions.length },
            { id: 'project', label: '3. Project Discussion', icon: FolderGit2, count: STANDARD_PROJECT_QUESTIONS.length },
            { id: 'hr', label: '4. HR Round', icon: UserCheck, count: HR_QUESTIONS.length }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedTopic('all');
                }}
                className={`flex items-center justify-center gap-2 py-4 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                  isActive
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-indigo-50/40 dark:bg-indigo-950/20'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-md font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Specific Content */}
        <div className="p-6">
          {/* TAB 1: CODING ROUND */}
          {activeTab === 'coding' && (
            <div className="space-y-6">
              {/* Topic Filters */}
              <div>
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  Filter by Data Structure / Topic:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {codingTopics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                        selectedTopic.toLowerCase() === topic.toLowerCase()
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {topic === 'all' ? 'All Coding Topics' : topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Coding Questions List */}
              <div className="space-y-3">
                {filteredCodingQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Badge variant={q.difficulty} size="xs">
                          {q.difficulty}
                        </Badge>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {q.topic}
                        </span>
                        <VerificationTag
                          type={q.verificationType}
                          source={q.verifiedSource}
                          lastVerified={q.lastVerified}
                          compact
                        />
                      </div>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">
                        {q.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {q.description}
                      </p>
                    </div>

                    <Link
                      to={`/coding/${q.id}`}
                      className="px-5 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>Open Code Editor</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL ROUND */}
          {activeTab === 'technical' && (
            <div className="space-y-6">
              {/* Technical Topic Filter */}
              <div>
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  Technical Syllabus Subjects:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {technicalTopics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedTopic.toLowerCase() === topic.toLowerCase()
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {topic === 'all' ? 'All Core Subjects' : topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Questions Grid */}
              <div className="space-y-4">
                {filteredTechQuestions.map((q) => (
                  <TechnicalCard key={q.id} question={q} />
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PROJECT DISCUSSION */}
          {activeTab === 'project' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-indigo-900 dark:text-indigo-200">
                    STAR Framework Project Defense
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Interviewers scrutinize project architecture, individual commits, and failure recovery. Practice the 7 canonical questions below or add your own project.
                  </p>
                </div>
                <Link
                  to="/projects"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shrink-0 shadow-sm transition-all"
                >
                  Manage My Projects
                </Link>
              </div>

              <div className="space-y-4">
                {STANDARD_PROJECT_QUESTIONS.map((q, idx) => (
                  <ProjectQuestionCard key={q.id} question={q} index={idx} />
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: HR ROUND */}
          {activeTab === 'hr' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-200">
                  {company.name} Cultural Fit & Behavioral Assessment
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                  HR evaluates self-awareness, willingness to relocate, and long-term retention. Use the AI response sandbox to eliminate filler words.
                </p>
              </div>

              <div className="space-y-4">
                {HR_QUESTIONS.map((q) => (
                  <HrQuestionCard key={q.id} question={q} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Curated Preparation Resources */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-500" />
          {company.name} Verified Placement Resources
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Curated roadmaps and past placement archives from verified alumni
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {company.preparationResources?.map((res, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  {res.type}
                </span>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mt-2">
                  {res.title}
                </h4>
                <p className="text-[10px] text-slate-400 mt-1">
                  Source: {res.verifiedSource}
                </p>
              </div>

              <button
                type="button"
                onClick={() => alert(`Opening resource: ${res.title}`)}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline pt-2 border-t border-slate-200 dark:border-slate-700"
              >
                <span>Access Resource Guide</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
