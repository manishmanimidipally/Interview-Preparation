import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PROGRESS, INITIAL_USER_PROJECTS } from '../data/mockUserData';

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('interviewpilot_progress');
    return saved ? JSON.parse(saved) : INITIAL_PROGRESS;
  });

  const [userProjects, setUserProjects] = useState(() => {
    const saved = localStorage.getItem('interviewpilot_user_projects');
    return saved ? JSON.parse(saved) : INITIAL_USER_PROJECTS;
  });

  const [mockHistory, setMockHistory] = useState(() => {
    const saved = localStorage.getItem('interviewpilot_mock_history');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('interviewpilot_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('interviewpilot_user_projects', JSON.stringify(userProjects));
  }, [userProjects]);

  useEffect(() => {
    localStorage.setItem('interviewpilot_mock_history', JSON.stringify(mockHistory));
  }, [mockHistory]);

  const recordSolvedQuestion = (questionId, questionTitle, category = 'coding', company = 'General') => {
    setProgress(prev => {
      if (prev.solvedQuestionIds.includes(questionId)) {
        return prev;
      }
      const updatedSolved = [...prev.solvedQuestionIds, questionId];
      const newTotal = prev.totalQuestionsPracticed + 1;
      const newCoding = category === 'coding' ? prev.codingProblemsSolved + 1 : prev.codingProblemsSolved;
      
      const newActivity = {
        id: 'act-' + Date.now(),
        type: category,
        title: `Solved "${questionTitle}"`,
        time: 'Just now',
        result: 'Completed (100%)',
        company
      };

      return {
        ...prev,
        solvedQuestionIds: updatedSolved,
        totalQuestionsPracticed: newTotal,
        codingProblemsSolved: newCoding,
        recentActivity: [newActivity, ...prev.recentActivity.slice(0, 9)],
        overallReadinessScore: Math.min(98, prev.overallReadinessScore + 1)
      };
    });
  };

  const isQuestionSolved = (questionId) => {
    return progress.solvedQuestionIds.includes(questionId);
  };

  const recordMockInterview = (report) => {
    setMockHistory(prev => [report, ...prev]);
    setProgress(prev => {
      const newCompleted = prev.mockInterviewsCompleted + 1;
      const newActivity = {
        id: 'act-' + Date.now(),
        type: 'mock',
        title: `Completed ${report.company} ${report.role} Mock`,
        time: 'Just now',
        result: `Score: ${report.overallScore}/100 (${report.verdict})`,
        company: report.company
      };

      return {
        ...prev,
        mockInterviewsCompleted: newCompleted,
        recentActivity: [newActivity, ...prev.recentActivity.slice(0, 9)],
        overallReadinessScore: Math.round((prev.overallReadinessScore * 0.7) + (report.overallScore * 0.3))
      };
    });
  };

  const addUserProject = (projectData) => {
    const newProj = {
      id: 'proj-' + Date.now(),
      ...projectData,
      createdAt: new Date().toISOString()
    };
    setUserProjects(prev => [newProj, ...prev]);

    // Record activity
    setProgress(prev => ({
      ...prev,
      recentActivity: [
        {
          id: 'act-' + Date.now(),
          type: 'project',
          title: `Added project "${newProj.title}"`,
          time: 'Just now',
          result: 'Questions Generated',
          company: 'Portfolio'
        },
        ...prev.recentActivity.slice(0, 9)
      ]
    }));

    return newProj;
  };

  const removeUserProject = (projectId) => {
    setUserProjects(prev => prev.filter(p => p.id !== projectId));
  };

  const resetAllProgress = () => {
    setProgress(INITIAL_PROGRESS);
    setUserProjects(INITIAL_USER_PROJECTS);
    setMockHistory([]);
    localStorage.removeItem('interviewpilot_progress');
    localStorage.removeItem('interviewpilot_user_projects');
    localStorage.removeItem('interviewpilot_mock_history');
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      userProjects,
      mockHistory,
      recordSolvedQuestion,
      isQuestionSolved,
      recordMockInterview,
      addUserProject,
      removeUserProject,
      resetAllProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
