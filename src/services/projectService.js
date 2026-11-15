import { STANDARD_PROJECT_QUESTIONS, generateCustomProjectQuestions } from '../data/projectQuestionsData';

export const projectService = {
  getStandardQuestions: () => {
    return STANDARD_PROJECT_QUESTIONS;
  },

  generateQuestionsForProject: (project) => {
    return generateCustomProjectQuestions(project);
  }
};
