import { CODING_QUESTIONS } from '../data/codingQuestionsData';
import { TECHNICAL_QUESTIONS } from '../data/technicalQuestionsData';
import { HR_QUESTIONS } from '../data/hrQuestionsData';
import { APTITUDE_QUESTIONS } from '../data/aptitudeQuestionsData';

export const questionService = {
  // Coding Questions
  getCodingQuestions: async (filters = {}) => {
    let result = [...CODING_QUESTIONS];

    if (filters.company && filters.company !== 'all') {
      result = result.filter(q =>
        q.companyTags.some(tag => tag.toLowerCase() === filters.company.toLowerCase())
      );
    }

    if (filters.topic && filters.topic !== 'all') {
      result = result.filter(q => q.topic.toLowerCase() === filters.topic.toLowerCase());
    }

    if (filters.difficulty && filters.difficulty !== 'all') {
      result = result.filter(q => q.difficulty.toLowerCase() === filters.difficulty.toLowerCase());
    }

    if (filters.search) {
      const s = filters.search.toLowerCase();
      result = result.filter(q =>
        q.title.toLowerCase().includes(s) ||
        q.description.toLowerCase().includes(s)
      );
    }

    return result;
  },

  getCodingQuestionById: async (id) => {
    return CODING_QUESTIONS.find(q => q.id === id) || null;
  },

  // Technical Questions
  getTechnicalQuestions: async (filters = {}) => {
    let result = [...TECHNICAL_QUESTIONS];

    if (filters.topic && filters.topic !== 'all') {
      result = result.filter(q => q.topic.toLowerCase() === filters.topic.toLowerCase());
    }

    if (filters.company && filters.company !== 'all') {
      result = result.filter(q =>
        q.companyTags.some(tag => tag.toLowerCase() === filters.company.toLowerCase())
      );
    }

    if (filters.difficulty && filters.difficulty !== 'all') {
      result = result.filter(q => q.difficulty.toLowerCase() === filters.difficulty.toLowerCase());
    }

    if (filters.search) {
      const s = filters.search.toLowerCase();
      result = result.filter(q =>
        q.question.toLowerCase().includes(s) ||
        q.answerGuidance.summary.toLowerCase().includes(s)
      );
    }

    return result;
  },

  // HR Questions
  getHrQuestions: async (filters = {}) => {
    let result = [...HR_QUESTIONS];

    if (filters.category && filters.category !== 'all') {
      result = result.filter(q => q.category.toLowerCase().includes(filters.category.toLowerCase()));
    }

    if (filters.company && filters.company !== 'all') {
      result = result.filter(q =>
        q.companyTags.some(tag => tag.toLowerCase() === filters.company.toLowerCase())
      );
    }

    return result;
  },

  // Aptitude Questions
  getAptitudeQuestions: async (filters = {}) => {
    let result = [...APTITUDE_QUESTIONS];

    if (filters.category && filters.category !== 'all') {
      result = result.filter(q => q.category.toLowerCase().includes(filters.category.toLowerCase()));
    }

    return result;
  }
};
