import { MOCK_INTERVIEW_BANK } from '../data/mockInterviewQuestionsData';
import { evaluateInterviewResponse, generateInterviewReport } from '../utils/evaluationEngine';

export const mockInterviewService = {
  // Generate interview question set for session
  generateInterviewSession: (company, role, round, count = 4) => {
    let pool = [];

    if (round === 'Technical Round') {
      pool = [...MOCK_INTERVIEW_BANK.technical];
    } else if (round === 'HR Round') {
      pool = [...MOCK_INTERVIEW_BANK.hr];
    } else if (round === 'Project Discussion') {
      pool = [...MOCK_INTERVIEW_BANK.project];
    } else {
      // Mixed or comprehensive
      pool = [
        ...MOCK_INTERVIEW_BANK.technical,
        ...MOCK_INTERVIEW_BANK.hr,
        ...MOCK_INTERVIEW_BANK.project
      ];
    }

    // Shuffle and pick
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    return {
      sessionId: 'session_' + Date.now(),
      company,
      role,
      round,
      questions: selected,
      totalQuestions: selected.length,
      startedAt: new Date().toISOString()
    };
  },

  evaluateAnswer: (question, answer, round) => {
    return evaluateInterviewResponse(question, answer, round);
  },

  finalizeReport: (sessionData) => {
    return generateInterviewReport(sessionData);
  }
};
