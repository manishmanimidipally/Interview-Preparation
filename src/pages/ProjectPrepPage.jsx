import React, { useState } from 'react';
import {
  FolderGit2,
  PlusCircle,
  Sparkles,
  Trash2,
  ExternalLink,
  Code2,
  Database,
  Layers,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { STANDARD_PROJECT_QUESTIONS, generateCustomProjectQuestions } from '../data/projectQuestionsData';
import { ProjectQuestionCard } from '../features/projects/ProjectQuestionCard';
import { ProjectFormModal } from '../features/projects/ProjectFormModal';

export const ProjectPrepPage = () => {
  const { userProjects, removeUserProject } = useProgress();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(userProjects[0]?.id || null);

  const activeProject = userProjects.find(p => p.id === selectedProjectId) || userProjects[0];
  const generatedCustomQuestions = activeProject ? generateCustomProjectQuestions(activeProject) : [];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              System Viva & Academic Project Defense
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              STAR Method Framework
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Project Interview Preparation
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Add your academic or personal capstone projects. Our generator creates custom viva questions testing your architecture, trade-offs, individual commits, and error boundaries.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all shrink-0 cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add Custom Project</span>
        </button>
      </div>

      {/* User's Added Projects Strip */}
      {userProjects.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-1">
            Your Candidate Projects ({userProjects.length}):
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  activeProject?.id === proj.id
                    ? 'border-indigo-600 bg-indigo-50/40 dark:bg-indigo-950/20 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white truncate">
                      {proj.title}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (window.confirm(`Delete project "${proj.title}"?`)) {
                          removeUserProject(proj.id);
                        }
                      }}
                      className="p-1 text-slate-400 hover:text-rose-500 transition-colors"
                      title="Remove Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <p className="truncate"><strong>Stack: </strong>{proj.techStack}</p>
                  <p className="truncate"><strong>Database: </strong>{proj.database}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Generated Questions tailored to Active Project */}
      {activeProject && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                Tailored Viva Questions for "{activeProject.title}"
              </h2>
              <p className="text-xs text-slate-500">
                Generated from your tech stack ({activeProject.techStack}) and role contribution
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              {generatedCustomQuestions.length} Tailored Scenarios
            </span>
          </div>

          <div className="space-y-4">
            {generatedCustomQuestions.map((q, idx) => (
              <ProjectQuestionCard key={q.id} question={q} index={idx} />
            ))}
          </div>
        </div>
      )}

      {/* Standard 7 Canonical Project Questions */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-500" />
            Universal Project Viva Questions (Asked by TCS, Infosys, Amazon)
          </h2>
          <p className="text-xs text-slate-500">
            Every candidate must master these 7 essential architectural and individual contribution questions
          </p>
        </div>

        <div className="space-y-4">
          {STANDARD_PROJECT_QUESTIONS.map((q, idx) => (
            <ProjectQuestionCard key={q.id} question={q} index={idx} />
          ))}
        </div>
      </div>

      {/* Project Add Modal */}
      <ProjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProjectAdded={(newProj) => setSelectedProjectId(newProj.id)}
      />
    </div>
  );
};
