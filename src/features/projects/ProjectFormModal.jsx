import React, { useState } from 'react';
import { PlusCircle, Sparkles, FolderGit2 } from 'lucide-react';
import { Modal } from '../../components/common/Modal';
import { useProgress } from '../../context/ProgressContext';

export const ProjectFormModal = ({ isOpen, onClose, onProjectAdded }) => {
  const { addUserProject } = useProgress();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: 'Java, Spring Boot, React, MySQL',
    database: 'MySQL 8.0',
    architecture: 'Layered MVC with RESTful Microservices',
    keyFeatures: '',
    contribution: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const newProject = addUserProject(formData);
    if (onProjectAdded) onProjectAdded(newProject);
    onClose();

    // Reset
    setFormData({
      title: '',
      description: '',
      techStack: 'Java, Spring Boot, React, MySQL',
      database: 'MySQL 8.0',
      architecture: 'Layered MVC with RESTful Microservices',
      keyFeatures: '',
      contribution: ''
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Project for Viva & Technical Defense">
      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Project Title *
          </label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Distributed Task Management Platform"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Project Description & Problem Statement *
          </label>
          <textarea
            name="description"
            required
            rows={3}
            value={formData.description}
            onChange={handleChange}
            placeholder="Explain the real-world problem, user persona, and business value..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Tech Stack (Frontend, Backend, APIs) *
            </label>
            <input
              type="text"
              name="techStack"
              required
              value={formData.techStack}
              onChange={handleChange}
              placeholder="e.g. Java 17, Spring Boot, React, Tailwind"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Database & Caching Engine *
            </label>
            <input
              type="text"
              name="database"
              required
              value={formData.database}
              onChange={handleChange}
              placeholder="e.g. PostgreSQL, Redis Cache"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            System Architecture & Design Pattern
          </label>
          <input
            type="text"
            name="architecture"
            value={formData.architecture}
            onChange={handleChange}
            placeholder="e.g. Microservices with API Gateway, Event-Driven with Kafka"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Key Features Implemented
          </label>
          <textarea
            name="keyFeatures"
            rows={2}
            value={formData.keyFeatures}
            onChange={handleChange}
            placeholder="e.g. JWT Role-Based Access Control, Real-time WebSockets, Automated PDF report exports..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Your Exact Individual Contribution *
          </label>
          <textarea
            name="contribution"
            required
            rows={2}
            value={formData.contribution}
            onChange={handleChange}
            placeholder="e.g. I designed 12 REST endpoints, wrote complex SQL queries with indexing, and handled payment gateway webhooks..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-600/20"
          >
            <Sparkles className="w-4 h-4" />
            Generate Viva Questions
          </button>
        </div>
      </form>
    </Modal>
  );
};
